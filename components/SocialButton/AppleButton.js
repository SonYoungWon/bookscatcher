import React from 'react';
import auth from '@react-native-firebase/auth';
import appleAuth, {
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import {_SOCIAL} from '../../global/enum';
import {Alert} from 'react-native';

export default ({loginButton, setIsLoad}) => {
  const onAppleButtonPress = async () => {
    setIsLoad(true);
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [
        AppleAuthRequestScope.EMAIL,
        AppleAuthRequestScope.FULL_NAME,
      ],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      Alert.alert('로그인 실패');
      throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce, email, fullName} = appleAuthRequestResponse;

    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    await auth()
      .signInWithCredential(appleCredential)
      .then(ggl => {
        const {user} = ggl;
        const nick = user.email.split('@');
        loginButton(
          user.email,
          user.displayName === null ? nick[0] : user.displayName,
        );
      })
      .catch(error => {
        console.log(error);
        Alert.alert('이미 가입된 아이디가 있습니다.');
      });
    setIsLoad(false);
    // Sign the user in with the credential
    return null;
  };

  return (
    <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={{
        width: 220,
        height: 50,
      }}
      onPress={() =>
        onAppleButtonPress().then(() => console.log('Apple sign-in complete!'))
      }
    />
  );
};
