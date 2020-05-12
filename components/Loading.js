import React from 'react';
import LottieView from 'lottie-react-native';
import {Layout} from '@ui-kitten/components';
import {width, height} from '../global/globalBucket';

export default ({isLoad}) => {
  return isLoad ? (
    <Layout
      style={{
        width: width,
        height: height,
        position: 'absolute',
        zIndex: 1000,
        opacity: 0.8,
      }}>
      <LottieView
        source={require('../assets/bookLoading.json')}
        autoPlay
        loop
      />
    </Layout>
  ) : (
    <></>
  );
};
