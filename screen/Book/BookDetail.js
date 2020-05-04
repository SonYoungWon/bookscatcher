/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {BookAddStyle} from './style';
import {SCREEN} from '../../global/enum';
import {Layout, Text} from '@ui-kitten/components';
import {TopNavigationAccessoriesShowcase} from '../../navigation/NavigationHeader';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={BookAddStyle.container}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route}/>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">책 자세히보기</Text>
      </Layout>
    </SafeAreaView>
  );
};
