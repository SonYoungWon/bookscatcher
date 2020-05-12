import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from './globalStyle';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {iosConfig, androidConfig} from './manage';
import {getMyBooks} from './APIBook';

export const theme = Theme;
export const {width, height: fullHieght} = Dimensions.get('window');
export const height = fullHieght - getStatusBarHeight();
export const iconSize = 35;

export const UID = async () => {
  return await AsyncStorage.getItem('uid');
};

export const nullCheck = param => {
  switch (param) {
    case '':
    case undefined:
    case 'undefined':
    case null:
      return false;
    default:
      return true;
  }
};

export const nullArrayCheck = param => {
  if (param.length > 0) {
    return true;
  } else {
    return false;
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

export const fireWhere = snap => {
  let many = [];
  snap._docs.map(doc => {
    many.push(doc._data);
  });
  return many;
};

export const oddEven = num => {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

export const removeTag = item => {
  return item.replace(/(<([^>]+)>)/gi, '');
};

export const removeSpace = item => {
  return item.replace(/(\s*)/g, '');
};

export const myBooks = async setBooks => {
  const my = await getMyBooks();
  let bookArray = [];
  my.myBook.map(({_data: result}) => {
    let info = [];
    my.book.map(({_data: mybook}) => {
      if (mybook.id === result.book) {
        info = mybook;
      }
    });
    bookArray.push({
      book: result.book,
      user: result.user,
      createAt: result.createAt,
      memo: result.memo,
      review: result.review,
      finish: result.finish,
      leave: result.leave,
      title: info.title,
      author: info.author,
      description: info.description,
      image: info.image,
      price: info.price,
    });
  });

  return bookArray;
};

export const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

export const getMyBookID = async book => {
  const user = await UID();
  return user + '&' + book;
};

export const getReviewID = async book => {
  const user = await UID();
  return 'Rv' + user + '&' + book;
};

export const getMemoID = async (book, createAt) => {
  const user = await UID();
  return user + '&' + book + '&' + createAt;
};

export const ascMemoSort = items => {
  return items.sort(function(a, b) {
    if (a._data.createAt > b._data.createAt) {
      return 1;
    }
    if (a._data.createAt < b._data.createAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};

export const descMemoSort = items => {
  return items.sort(function(a, b) {
    if (a._data.createAt < b._data.createAt) {
      return 1;
    }
    if (a._data.createAt > b._data.createAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};
