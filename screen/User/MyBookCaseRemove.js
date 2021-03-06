import React from 'react';
import {SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {TopNavigationAccessoriesShowcase} from '../../navigation/NavigationHeader';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route} />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">서재에서 뺀 책</Text>
      </Layout>
    </SafeAreaView>
  );
};
