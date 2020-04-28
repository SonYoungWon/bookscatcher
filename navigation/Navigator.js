import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/Book/BookCase';
import {DetailsScreen} from '../screen/Book/BookDetail';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
  console.log('HomeNavi');
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
};

export default () => {
  console.log('appNavi');
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
