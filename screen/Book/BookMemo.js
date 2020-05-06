import React, {useState} from 'react';
import {SafeAreaView, ScrollView, YellowBox} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import BookMemoList from '../../components/BookMemoList';
import {MEMO} from '../../global/enum';
import {BookMemoStyle} from './style';
import BookMemoWrite from '../../components/BookMemoWrite';
export default ({route, navigation}) => {
  const [mode, setMode] = useState(MEMO.VIEW);
  return (
    <SafeAreaView style={BookMemoStyle.Container}>
      <TopNavigationAccessoriesShowcase
        navigationaa={navigation}
        route={route}
        state={{mode: mode, setMode: setMode}}
      />
      <ScrollView contentContainerStyle={BookMemoStyle.ScrollView}>
        <Layout style={BookMemoStyle.MemoLayout}>
          <Layout style={BookMemoStyle.MemoHeader}>
            <Text style={BookMemoStyle.MemoTitle} category="h5">
              MEMO
            </Text>
          </Layout>
          {mode === MEMO.VIEW ? <BookMemoList /> : <BookMemoWrite />}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
