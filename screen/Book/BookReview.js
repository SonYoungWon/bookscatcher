/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, YellowBox} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {REVIEW, ADD} from '../../global/enum';
import {getReview} from '../../global/APIBook';
import {BookMemoStyle} from './style';
import BookReviewView from '../../components/_Book/BookReviewView';
import BookReviewWrite from '../../components/_Book/BookReviewWrite';
import ImageOverlay from 'react-native-image-overlay';

export default ({route, navigation}) => {
  const [mode, setMode] = useState(REVIEW.VIEW);
  const [review, setReview] = useState(ADD.NOTADD);
  const book = route.params.data;

  useEffect(() => {
    getReviewList();
  }, [mode]);

  const getReviewList = async () => {
    const {_data: list} = await getReview(book.book);
    setReview(list);
  };

  return (
    <SafeAreaView style={BookMemoStyle.Container}>
      <TopNavigationAccessoriesShowcase
        navigationaa={navigation}
        route={route}
        state={{mode: mode, setMode: setMode}}
      />
      <ScrollView contentContainerStyle={BookMemoStyle.ScrollView}>
        <ImageOverlay
          source={{uri: book.image}}
          style={BookMemoStyle.headerContainer}>
          <Text
            style={BookMemoStyle.headerTitle}
            category="h1"
            status="control">
            {book.title}
          </Text>
          <Text
            style={BookMemoStyle.headerDescription}
            category="s1"
            status="control">
            {book.author}
          </Text>
        </ImageOverlay>
        <Layout style={BookMemoStyle.MemoLayout}>
          {mode === REVIEW.VIEW ? (
            <BookReviewView review={review} />
          ) : (
            <BookReviewWrite review={review} book={book} setMode={setMode} />
          )}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
