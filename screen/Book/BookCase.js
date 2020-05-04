import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Text, Layout, Icon} from '@ui-kitten/components';
import Loading from '../../components/Loading';
import {BookCaseStyle} from './style';
import {theme} from '../../global/globalBucket';
import MainLogo from '../../components/Lottie/MainLogo';
import {CardAccessoriesShowcase} from '../../components/BookList';
export default ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details', {title: 'Clean Code'});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Loading isLoad={false} />
        <Layout style={BookCaseStyle.Header}>
          <MainLogo isLoad={true} />
          <Layout style={BookCaseStyle.IconAddLayout}>
            <Icon
              style={BookCaseStyle.IconAddSize}
              fill={theme.pointColor}
              name="plus-outline"
            />
          </Layout>
        </Layout>
        <Layout style={{flex: 1}}>
          <CardAccessoriesShowcase />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
