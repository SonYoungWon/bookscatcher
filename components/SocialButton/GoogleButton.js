import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Alert} from 'react-native';
import {SOCIAL} from '../../global/enum';
import {GoogleSocialButton} from 'react-native-social-buttons';

// eslint-disable-next-line prettier/prettier
export default ({loginButton, setIsLoad}) => {
  const onGoogleButtonPress = async () => {
    setIsLoad(true);
    await GoogleSignin.configure({
      webClientId:
        '582595177795-equ2o01qq84a8393gbhp6ps87rul6of8.apps.googleusercontent.com',
      offlineAccess: true,
    });
    // Get the users ID token
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth()
      .signInWithCredential(googleCredential)
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
    // Sign-in the user with the credential
    return null;
  };

  return (
    <GoogleSocialButton
      buttonText="구글로 로그인"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
};
