import React, {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {EmailSocialButton} from 'react-native-social-buttons';
import {SOCIAL} from '../../global/enum';
import {Layout, Input} from '@ui-kitten/components';

export default ({loginButton, setIsLoad}) => {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  const LoginOnpress = () => {
    setIsLoad(true);
    auth()
      .signInWithEmailAndPassword(emailVal, passwordVal)
      .then(info => {
        const {user} = info;
        console.log(user);
        const nick = user.email.split('@');
        loginButton(user.email, nick[0]);
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('이미 있는 이메일입니다.');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('아이디는 이메일 형식이어야 합니다.');
        }
      });
    setIsLoad(false);
  };

  return (
    <Layout style={{width: '100%'}}>
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
