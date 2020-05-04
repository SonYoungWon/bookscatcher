import React from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {SOCIAL} from '../../global/enum';
import {FacebookSocialButton} from 'react-native-social-buttons';
import {Alert} from 'react-native';

export default ({loginButton, setIsLoad}) => {
  const onFacebookButtonPress = async () => {
    setIsLoad(true);
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    await auth()
      .signInWithCredential(facebookCredential)
      .then(au => {
        const {user} = au;
        console.log(au);
        loginButton(user.email, user.displayName);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('이미 가입된 아이디가 있습니다.');
      });
    setIsLoad(false);

    // loginButton(user);
    // Sign-in the user with the credential
    return null;
  };

  return (
    <FacebookSocialButton
      buttonText="페이스북으로 로그인"
      onPress={() =>
        onFacebookButtonPress().then(() =>
          console.log('Signed in with Facebook!'),
        )
      }
    />
  );
};
