import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookAdd from '../screen/Book/BookAdd';
import BookCase from '../screen/Book/BookCase';
import BookDetail from '../screen/Book/BookDetail';
import BookMemo from '../screen/Book/BookMemo';
import BookReview from '../screen/Book/BookReview';
import BookShare from '../screen/Book/BookShare';
import MyAlarmList from '../screen/User/MyAlarmList';
import MyAlarmSetting from '../screen/User/MyAlarmSetting';
import MyBookCaseRemove from '../screen/User/MyBookCaseRemove';
import Login from '../screen/User/Login';
import MyReviewList from '../screen/User/MyReviewList';
import MyReviewWatch from '../screen/User/MyReviewWatch';
import MyProfile from '../screen/User/MyProfile';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={BookCase} />
      <Screen name="BookDetail" component={BookDetail} />
      <Screen name="BookMemo" component={BookMemo} />
      <Screen name="BookReview" component={BookReview} />
      <Screen name="BookShare" component={BookShare} />
      <Screen name="BookAdd" component={BookAdd} />
      <Screen name="MyAlarmList" component={MyAlarmList} />
      <Screen name="MyAlarmSetting" component={MyAlarmSetting} />
      <Screen name="MyBookCaseRemove" component={MyBookCaseRemove} />
      <Screen name="MyReviewList" component={MyReviewList} />
      <Screen name="MyReviewWatch" component={MyReviewWatch} />
      <Screen name="MyProfile" component={MyProfile} />
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
