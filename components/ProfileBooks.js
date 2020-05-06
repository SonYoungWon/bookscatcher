import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import ProfileBooksFlat from './ProfileBooksFlat';

export default ({route, navigation}) => {
  return (
    <Layout style={profileStyle.ProfileBooks}>
      <Layout style={profileStyle.ProfileBooksSection}>
        <Text style={profileStyle.ProfileBooksSectionText} category="s2">
          내 책
        </Text>
        <ProfileBooksFlat />
        <Text style={profileStyle.ProfileBooksSectionText} category="s2">
          완독도서
        </Text>
        <ProfileBooksFlat />
        <Text style={profileStyle.ProfileBooksSectionText} category="s2">
          독후감
        </Text>
        <ProfileBooksFlat />
      </Layout>
    </Layout>
  );
};

export const profileStyle = StyleSheet.create({
  ProfileBooks: {},
  ProfileBooksSection: {marginHorizontal: 10},
  ProfileBooksSectionText: {marginHorizontal: 10, marginVertical: 10},
});
