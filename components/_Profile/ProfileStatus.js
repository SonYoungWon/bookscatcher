import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export default ({route, navigation}) => {
  return (
    <Layout style={profileStyle.ProfileStatus}>
      <Layout style={profileStyle.ProfileStatusSection}>
        <Text style={profileStyle.ProfileStatusText} category="s1">
          Greate
        </Text>
        <Text
          style={profileStyle.ProfileStatusText}
          category="c1"
          appearance="hint">
          등급
        </Text>
      </Layout>
      <Layout style={profileStyle.ProfileStatusSection}>
        <Text style={profileStyle.ProfileStatusText} category="s1">
          12
        </Text>
        <Text
          style={profileStyle.ProfileStatusText}
          category="c1"
          appearance="hint">
          책장
        </Text>
      </Layout>
      <Layout style={profileStyle.ProfileStatusSection}>
        <Text style={profileStyle.ProfileStatusText} category="s1">
          6
        </Text>
        <Text
          style={profileStyle.ProfileStatusText}
          category="c1"
          appearance="hint">
          완독
        </Text>
      </Layout>
      <Layout style={profileStyle.ProfileStatusSectionEnd}>
        <Text style={profileStyle.ProfileStatusText} category="s1">
          5
        </Text>
        <Text
          style={profileStyle.ProfileStatusText}
          category="c1"
          appearance="hint">
          독후감
        </Text>
      </Layout>
    </Layout>
  );
};

export const profileStyle = StyleSheet.create({
  ProfileStatus: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  ProfileStatusSection: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    borderRightWidth: 1,
  },
  ProfileStatusSectionEnd: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  ProfileStatusText: {
    textAlign: 'center',
    margin: 5,
  },
});
