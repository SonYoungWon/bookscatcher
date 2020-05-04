import React from 'react';
import LottieView from 'lottie-react-native';
import {Layout} from '@ui-kitten/components';
import {width, height} from '../../global/globalBucket';

export default ({active = false}) => {
  return (
    <Layout style={{flex: 1, alignSelf: 'flex-end'}}>
      {active ? (
        <LottieView
          source={require('../../assets/cat.json')}
          style={{width: 40}}
          autoPlay
          loop
        />
      ) : (
        <LottieView
          source={require('../../assets/catSik.json')}
          style={{width: 40}}
          autoPlay
          loop
        />
      )}
    </Layout>
  );
};
