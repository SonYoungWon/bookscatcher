import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Layout} from '@ui-kitten/components';
import TopNavigationAccessoriesShowcase from '../../navigation/NavigationHeader';
import {alarmStyle} from './UserStyles';
import ProfileAlarmList from '../../components/ProfileAlarmList';

export default ({route, navigation}) => {
  return (
    <SafeAreaView style={alarmStyle.AlarmContainer}>
      <TopNavigationAccessoriesShowcase navigation={navigation} route={route} />
      <Layout>
        <TouchableOpacity>
          <ProfileAlarmList />
        </TouchableOpacity>
      </Layout>
    </SafeAreaView>
  );
};
