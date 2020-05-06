import React from 'react';
import LottieView from 'lottie-react-native';
import {Layout} from '@ui-kitten/components';
import {width, height} from '../../global/globalBucket';

export default () => {
  return (
    <Layout
      style={{width: width / 2, height: width / 1.3, alignSelf: 'center'}}>
      <LottieView source={require('../../assets/smile.json')} autoPlay loop />
    </Layout>
  );
};
