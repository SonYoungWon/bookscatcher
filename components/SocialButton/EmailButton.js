import React, {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {EmailSocialButton} from 'react-native-social-buttons';
import {NOTICE} from '../../global/enum';
import {Layout, Input} from '@ui-kitten/components';

export default ({loginButton, setIsLoad}) => {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  const LoginOnpress = () => {
    setIsLoad(true);
    auth()
      .signInWithEmailAndPassword(emailVal, passwordVal)
      .then(fire => {
        const {user} = fire;
        loginButton(user);
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert(NOTICE.ALEADYEMAIL);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert(NOTICE.ALEADYREGEX);
        }

        if (error.code === 'auth/user-not-found') {
          console.log('That new email');
          auth()
            .createUserWithEmailAndPassword(emailVal, passwordVal)
            .then(fire => {
              const {user} = fire;
              loginButton(user);
            });
        }
      });
    setIsLoad(false);
  };

  return (
    <Layout style={{width: '100%', marginBottom: 20}}>
      <Input
        placeholder="아이디"
        value={emailVal}
        onChangeText={nextValue => setEmailVal(nextValue)}
      />
      <Input
        placeholder="비밀번호"
        value={passwordVal}
        secureTextEntry={true}
        onChangeText={nextValue => setPasswordVal(nextValue)}
      />
      <EmailSocialButton
        onPress={() => LoginOnpress()}
        buttonText="이메일로 로그인"
      />
    </Layout>
  );
};
