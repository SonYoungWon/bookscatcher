/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, YellowBox} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {BookMemoStyle} from './style';
import {getMemo} from '../../global/APIBook';
import {MEMO, ADD, SORT} from '../../global/enum';
import {ascMemoSort, descMemoSort} from '../../global/globalBucket';
import BookMemoList from '../../components/_Book/BookMemoList';
import BookMemoWrite from '../../components/_Book/BookMemoWrite';
import BookMemoAdd from '../../components/_Book/BookMemoAdd';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';

export default ({route, navigation}) => {
  const [mode, setMode] = useState(MEMO.VIEW);
  const [add, setAdd] = useState(ADD.NOTADD);
  const [memo, setMemo] = useState([]);
  const [sort, setSort] = useState(SORT.ASC);
  const book = route.params.data;

  useEffect(() => {
    getMemoList();
  }, [add, sort]);

  const getMemoList = async () => {
    const {_docs: list} = await getMemo(book.book);
    const memoList = sort === SORT.ASC ? ascMemoSort(list) : descMemoSort(list);
    setMemo(memoList);
  };

  return (
    <SafeAreaView style={BookMemoStyle.Container}>
      <TopNavigationAccessoriesShowcase
        navigationaa={navigation}
        route={route}
        state={{
          mode: mode,
          setMode: setMode,
          setAdd: setAdd,
          setSort: setSort,
          sort: sort,
        }}
      />
      <ScrollView contentContainerStyle={BookMemoStyle.ScrollView}>
        <Layout style={BookMemoStyle.MemoLayout}>
          <Layout style={BookMemoStyle.MemoHeader}>
            <Text style={BookMemoStyle.MemoTitle} category="h5">
              MEMO
            </Text>
          </Layout>
          {add === ADD.ADD && <BookMemoAdd setAdd={setAdd} book={book.book} />}
          {mode === MEMO.VIEW ? (
            <BookMemoList memo={memo} />
          ) : (
            <BookMemoWrite memo={memo} getMemoList={getMemoList} />
          )}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
