import React from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation} from '@ui-kitten/components';
import {BookAddStyle} from './style';
import {TopNavigationAccessoriesShowcase} from '../../navigation/NavigationHeader';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={BookAddStyle.container}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route} />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">책추가</Text>
      </Layout>
    </SafeAreaView>
  );
};
