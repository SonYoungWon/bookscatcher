import React from 'react';
import {Platform} from 'react-native';

export const _APOLLO = {
  // uri: 'localhost:4000',
  uri: 'tattoos-f571855f29.herokuapp.com',
};

export const _GOOGLECLIENTIDIOS =
  '582595177795-748946c4e3c0a8cmu960ltc7430fvkul.apps.googleusercontent.com';

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
export const androidConfig = {
  clientId:
    '540421815286-par0rq1gu5glfmelfb2bua1qb8p7m29n.apps.googleusercontent.com',
  appId: '1:540421815286:android:88a1e135547925aef7e5d7',
  apiKey: 'AIzaSyBLrkNrhJGy9rUHktqraQmdeLSDLddxaFI',
  databaseURL: 'https://bookscatcher-bb0f7.firebaseio.com',
  storageBucket: 'bookscatcher-bb0f7.appspot.com',
  messagingSenderId: '540421815286',
  projectId: 'bookscatcher',

  // enable persistence by adding the below flag
  persistence: true,
};

// pluck values from your `google-services.json` file you created on the firebase console
export const iosConfig = {
  clientId: 'x',
  appId: 'x',
  apiKey: 'x',
  databaseURL: 'x',
  storageBucket: 'x',
  messagingSenderId: 'x',
  projectId: 'x',

  // enable persistence by adding the below flag
  persistence: true,
};

export const LoginBackgroundImage = require('../assets/back2.jpg');
