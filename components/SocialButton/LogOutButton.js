import React, {useState} from 'react';
import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {Layout, Button} from '@ui-kitten/components';
import {iosConfig, androidConfig} from '../../global/manage';
import AsyncStorage from '@react-native-community/async-storage';

export default ({navigation}) => {
  const firebaseInitial = async () => {
    if (firebase.apps.length === 0) {
      await firebase.initializeApp(
        // use platform specific firebase config
        Platform.OS === 'ios' ? iosConfig : androidConfig,
      );
    }
  };

  const _onLogout = async () => {
    console.log('logout');
    firebaseInitial();
    auth().signOut();
    await AsyncStorage.setItem('token', '');
    await AsyncStorage.setItem('jwt', '');
    await AsyncStorage.setItem('email', '');
    await AsyncStorage.setItem('social', '');
    navigation.navigate('Login');
  };
  return (
    <Layout style={{marginVertical: 30}}>
      <Button onPress={() => _onLogout()}>로그아웃</Button>
    </Layout>
  );
};
