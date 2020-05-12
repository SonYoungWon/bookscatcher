import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Layout} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {alarmSettingStyle} from './UserStyles';
import ProfileAlarmSettingTime from '../../components/_Profile/ProfileAlarmSettingTime';
import ProfileAlarmSettingWeek from '../../components/_Profile/ProfileAlarmSettingWeek';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={alarmSettingStyle.AlarmContainer}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route} />
      <ProfileAlarmSettingTime />
      <ProfileAlarmSettingWeek />
      <Layout style={alarmSettingStyle.AlarmEnterButton}>
        <Button>알람맞추기</Button>
      </Layout>
    </SafeAreaView>
  );
};
