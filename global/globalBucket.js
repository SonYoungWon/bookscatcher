import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from './globalStyle';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {iosConfig, androidConfig} from './manage';

export const theme = Theme;
export const {width, height: fullHieght} = Dimensions.get('window');
export const height = fullHieght - getStatusBarHeight();
export const iconSize = 35;
export const nullCheck = param => {
  switch (param) {
    case '':
      return false;
    case undefined:
      return false;
    case 'undefined':
      return false;
    case null:
      return false;
    default:
      return true;
  }
};

export const useInput = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

export const handleBackButton = () => {
  return true;
};

export const logout = async navigation => {
  const firebaseInitial = async () => {
    if (firebase.apps.length === 0) {
      await firebase.initializeApp(
        // use platform specific firebase config
        Platform.OS === 'ios' ? iosConfig : androidConfig,
      );
    }
  };

  firebaseInitial();
  auth().signOut();
  await AsyncStorage.setItem('token', '');
  await AsyncStorage.setItem('jwt', '');
  await AsyncStorage.setItem('email', '');
  await AsyncStorage.setItem('social', '');
  navigation.navigate('Login');
};
