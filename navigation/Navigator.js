/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookAdd from '../screen/Book/BookAdd';
import BookCase from '../screen/Book/BookCase';
import BookDetail from '../screen/Book/BookDetail';
import BookInfo from '../screen/Book/BookInfo';
import BookMemo from '../screen/Book/BookMemo';
import BookReview from '../screen/Book/BookReview';
import BookShare from '../screen/Book/BookShare';
import AlarmList from '../screen/User/AlarmList';
import AlarmSetting from '../screen/User/AlarmSetting';
import BookCaseRemove from '../screen/User/BookCaseRemove';
import Login from '../screen/User/Login';
import MyReviewList from '../screen/User/MyReviewList';
import MyReviewWatch from '../screen/User/MyReviewWatch';
import Profile from '../screen/User/Profile';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={BookCase}/>
      <Screen name="Details" component={BookDetail} />
      <Screen name="BookInfo" component={BookInfo} />
      <Screen name="BookMemo" component={BookMemo} />
      <Screen name="BookReview" component={BookReview} />
      <Screen name="BookShare" component={BookShare} />
      <Screen name="BookAdd" component={BookAdd} />
      <Screen name="AlarmList" component={AlarmList} />
      <Screen name="AlarmSetting" component={AlarmSetting} />
      <Screen name="BookCaseRemove" component={BookCaseRemove} />
      <Screen name="MyReviewList" component={MyReviewList} />
      <Screen name="MyReviewWatch" component={MyReviewWatch} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
