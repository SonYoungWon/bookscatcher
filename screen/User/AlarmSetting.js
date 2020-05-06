import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button, Layout, Toggle, Text} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {alarmSettingStyle} from './UserStyles';
import {HOUR, MIN, WEEK, TIMERANGE} from '../../global/enum';
import ProfileAlarmSettingTime from '../../components/ProfileAlarmSettingTime';
import ProfileAlarmSettingWeek from '../../components/ProfileAlarmSettingWeek';

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
