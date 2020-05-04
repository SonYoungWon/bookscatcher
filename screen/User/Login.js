/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Platform, ImageBackground} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {authStyle} from './UserStyles';
import GoogleButton from '../../components/SocialButton/GoogleButton';
import AppleButton from '../../components/SocialButton/AppleButton';
import FaceBookButton from '../../components/SocialButton/FaceBookButton';
import EmailButton from '../../components/SocialButton/EmailButton';
import Loading from '../../components/Loading';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {
  iosConfig,
  androidConfig,
  LoginBackgroundImage,
} from '../../global/manage';
import {nullCheck} from '../../global/globalBucket';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    checkLogin();
    firebaseInitial();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('email');
    if (nullCheck(email)) {
      navigation.navigate('Home');
    }
  };

  const firebaseInitial = async () => {
    if (firebase.apps.length === 0) {
      await firebase.initializeApp(
        Platform.OS === 'ios' ? iosConfig : androidConfig,
      );
    }
  };

  const onAuthStateChanged = user => {
    if (initializing) {
      setInitializing(false);
    }
  };

  if (initializing) {
    return null;
  }

  const loginButton = async (email, name) => {
    if (nullCheck(email)) {
      console.log('login OK');
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('nick', name);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView contentContainerStyle={authStyle.Container}>
      <KeyboardAwareScrollView>
        <Loading isLoad={isLoad} />
        <ImageBackground
          source={LoginBackgroundImage}
          style={authStyle.BackgroundImage}>
          <Layout style={authStyle.LoginHeaderLayout}>
            <Text style={authStyle.LoginHeaderText} category="h6">
              독서를 사랑하는 사람들을 위한 1등 앱
            </Text>
          </Layout>
          <Layout style={authStyle.LoginLayout}>
            <EmailButton
              navigation={navigation}
              loginButton={loginButton}
              setIsLoad={setIsLoad}
            />
            <GoogleButton loginButton={loginButton} setIsLoad={setIsLoad} />
            <FaceBookButton loginButton={loginButton} setIsLoad={setIsLoad} />
            {Platform.OS === 'ios' && (
              <AppleButton loginButton={loginButton} setIsLoad={setIsLoad} />
            )}
          </Layout>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
