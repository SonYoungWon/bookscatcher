import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, BackHandler} from 'react-native';
import {Layout, Icon, Card} from '@ui-kitten/components';
import Loading from '../../components/Loading';
import {BookCaseStyle} from './style';
import {theme, handleBackButton} from '../../global/globalBucket';
import MainLogo from '../../components/Lottie/MainLogo';
import BookList from '../../components/BookList';
import {NavigationLeft} from '../../navigation/NavigationLeft';

export default ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);

  return (
    <SafeAreaView style={BookCaseStyle.Container}>
      <ScrollView style={BookCaseStyle.Container}>
        <Loading isLoad={false} />
        <Layout style={BookCaseStyle.Header}>
          <NavigationLeft navigation={navigation} />
          <MainLogo isLoad={true} />
          <Layout style={BookCaseStyle.IconAddLayout}>
            <Icon
              style={BookCaseStyle.IconAddSize}
              fill={theme.pointColor}
              name="plus-outline"
            />
          </Layout>
        </Layout>
        <Layout>
          <BookList />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
