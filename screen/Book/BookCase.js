import React, {useState, useEffect} from 'react';
import {SafeAreaView, BackHandler, TouchableOpacity} from 'react-native';
import {Layout, Icon, Text} from '@ui-kitten/components';
import Loading from '../../components/Loading';
import {BookCaseStyle} from './style';
import {bookCasePreload} from './bucket';
import {theme, handleBackButton} from '../../global/globalBucket';
import MainLogo from '../../components/Lottie/MainLogo';
import BookList from '../../components/_Book/BookList';
import {NavigationLeft} from '../../navigation/NavigationLeft';

export default ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState([]);

  const preLoad = () => {
    bookCasePreload(setBooks, setIsLoad);
  };

  useEffect(() => {
    preLoad();
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);

  const HeaderComponent = () => (
    <Layout style={BookCaseStyle.Header}>
      <NavigationLeft navigation={navigation} />
      <MainLogo isLoad={true} />
      <Layout style={BookCaseStyle.IconAddLayout}>
        <TouchableOpacity onPress={() => navigation.navigate('BookAdd')}>
          <Icon
            style={BookCaseStyle.IconAddSize}
            fill={theme.pointColor}
            name="plus-outline"
          />
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
  return (
    <SafeAreaView style={BookCaseStyle.Container}>
      <Loading isLoad={isLoad} />
      {books && books.length > 0 ? (
        <BookList header={HeaderComponent} data={books} />
      ) : (
        <Layout style={BookCaseStyle.Container}>
          <HeaderComponent />
          <Text style={BookCaseStyle.EmptyText}>등록된 책이 없습니다.</Text>
        </Layout>
      )}
    </SafeAreaView>
  );
};
