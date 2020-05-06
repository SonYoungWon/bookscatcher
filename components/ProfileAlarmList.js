import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Layout, Text} from '@ui-kitten/components';
import {height} from '../global/globalBucket';
import {withNavigation} from '@react-navigation/compat';

const ProfileAlarmList = ({route, navigation}) => {
  const Header = props => {
    return (
      <Layout style={alarmStyle.AlarmCardHeader}>
        <Text>월, 화, 수, 목, 금</Text>
      </Layout>
    );
  };

  const alarmOnpress = (id = '') => {
    navigation.navigate('AlarmSetting', {title: '알람 설정'});
  };

  return (
    <Layout style={alarmStyle.AlarmContainer}>
      <Card
        style={alarmStyle.AlarmCard}
        header={Header}
        onPress={() => alarmOnpress('Card')}>
        <Layout style={alarmStyle.AlarmLayout}>
          <Text style={alarmStyle.AlarmCardText} category="h6" status="primary">
            오전 11:00
          </Text>
          <Text
            style={alarmStyle.AlarmCardText}
            category="s2"
            appearance="hint">
            부터{' '}
          </Text>
          <Text style={alarmStyle.AlarmCardText} category="h6" status="warning">
            120분
          </Text>
        </Layout>
      </Card>

      <Card
        style={alarmStyle.AlarmCard}
        header={Header}
        onPress={() => alarmOnpress('Card')}>
        <Layout style={alarmStyle.AlarmLayout}>
          <Text style={alarmStyle.AlarmCardText} category="h6" status="primary">
            오전 11:00
          </Text>
          <Text
            style={alarmStyle.AlarmCardText}
            category="s2"
            appearance="hint">
            부터{' '}
          </Text>
          <Text style={alarmStyle.AlarmCardText} category="h6" status="warning">
            120분
          </Text>
        </Layout>
      </Card>
    </Layout>
  );
};

export const alarmStyle = StyleSheet.create({
  AlarmContainer: {
    height: height,
  },
  AlarmCard: {
    margin: 10,
    backgroundColor: '#FAFAFA',
  },
  AlarmLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.1,
    backgroundColor: '#FAFAFA',
  },
  AlarmCardHeader: {
    padding: 10,
    textAlign: 'right',
    alignItems: 'flex-end',
    backgroundColor: '#FAFAFA',
  },
  AlarmCardText: {
    marginHorizontal: 5,
  },
});

export default withNavigation(ProfileAlarmList);
