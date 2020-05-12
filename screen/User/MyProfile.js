import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Layout} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {profileStyle} from './UserStyles';
import ProfileInfoName from '../../components/_Profile/ProfileInfoName';
import ProfileStatus from '../../components/_Profile/ProfileStatus';
import ProfileBooks from '../../components/_Profile/ProfileBooks';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={profileStyle.Container}>
      <ScrollView>
        <TopNavigationAccessoriesShowcase
          navigation={navigation}
          route={route}
        />
        <Layout style={profileStyle.ProfileInfo}>
          <ProfileInfoName />
          <ProfileStatus />
          <ProfileBooks />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
