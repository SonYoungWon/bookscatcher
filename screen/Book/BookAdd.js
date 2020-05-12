/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import {searchProcess} from './bucket';
import {BookAddStyle} from './style';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import BookSearchBar from '../../components/_Book/BookSearchBar';
import BookAddList from '../../components/_Book/BookAddList';

export default ({route, navigation}) => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [keyword]);

  const getData = async () => {
    const result = await searchProcess(keyword, page);
    setData(result);
  };

  return (
    <SafeAreaView style={BookAddStyle.Container}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route} />
      <BookSearchBar setKeyword={setKeyword} />
      {data ? (
        <BookAddList data={data.items} setPage={setPage} />
      ) : (
        <Layout style={BookAddStyle.EmptyContainer}>
          <Text>검색 결과가 없습니다.</Text>
        </Layout>
      )}
    </SafeAreaView>
  );
};
