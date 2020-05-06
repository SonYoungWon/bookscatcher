import React, {useState} from 'react';
import {SafeAreaView, ScrollView, YellowBox} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {REVIEW} from '../../global/enum';
import {BookMemoStyle} from './style';
import BookReviewView from '../../components/BookReviewView';
import BookReviewWrite from '../../components/BookReviewWrite';
export default ({route, navigation}) => {
  const [mode, setMode] = useState(REVIEW.VIEW);
  return (
    <SafeAreaView style={BookMemoStyle.Container}>
      <TopNavigationAccessoriesShowcase
        navigationaa={navigation}
        route={route}
        state={{mode: mode, setMode: setMode}}
      />
      <ScrollView contentContainerStyle={BookMemoStyle.ScrollView}>
        <Layout style={BookMemoStyle.MemoLayout}>
          {mode === REVIEW.VIEW ? <BookReviewView /> : <BookReviewWrite />}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
