import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Avatar, Button} from '@ui-kitten/components';
import {withNavigation} from '@react-navigation/compat';

const ProfileInfoName = ({route, navigation}) => {
  return (
    <>
      <Layout style={profileStyle.ProfileInfoName}>
        <Text category="h3" style={profileStyle.ProfileInfoNameText}>
          SonYoungWon
        </Text>
        <Avatar
          style={profileStyle.ProfileInfoNameAvatar}
          size="giant"
          source={require('../../assets/book6.jpg')}
        />
      </Layout>
      <Button
        style={profileStyle.ProfileInfoButton}
        size="large"
        status="danger"
        onPress={() =>
          navigation.navigate('MyAlarmList', {title: '알람 설정'})
        }>
        독서 시간 알람 설정
      </Button>
    </>
  );
};

export const profileStyle = StyleSheet.create({
  ProfileInfoName: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ProfileInfoNameText: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    margin: 10,
  },
  ProfileInfoNameAvatar: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  ProfileInfoButton: {
    margin: 10,
  },
});

export default withNavigation(ProfileInfoName);
