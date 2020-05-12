/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {BookDetailStyle} from './style';
import {Layout} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import BookInfo from '../../components/_Book/BookInfo';
import BookStory from '../../components/_Book/BookStory';
import BookDetailButtons from '../../components/_Book/BookDetailButtons';

export default ({route, navigation}) => {
  const book = route.params.data;
  return (
    <SafeAreaView style={BookDetailStyle.Container}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route}/>
      <ScrollView>
        <Layout>
          <BookInfo book={book} />
          <BookStory book={book} />
          <BookDetailButtons book={book} />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
