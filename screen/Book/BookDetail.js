/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {BookAddStyle} from './style';
import {Layout} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import BookInfo from '../../components/BookInfo';
import BookStory from '../../components/BookStory';
import BookDetailButtons from '../../components/BookDetailButtons';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={BookAddStyle.Container}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route}/>
      <ScrollView>
        <Layout>
          <BookInfo />
          <BookStory />
          <BookDetailButtons />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
