import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {WEEK} from '../../global/enum';

export default ({route, navigation}) => {
  const [day, setDay] = useState([]);
  const dayOnpress = onDay => {
    if (!day.includes(onDay)) {
      setDay(d => [...d, onDay]);
    } else {
      setDay(day.filter(e => e !== onDay));
    }
  };

  return (
    <Layout style={alarmSettingStyle.AlarmDay}>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.SUNDAY)}>
        <Text
          style={
            day.includes(WEEK.SUNDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          일
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.MONDAY)}>
        <Text
          style={
            day.includes(WEEK.MONDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          월
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.TUESDAY)}>
        <Text
          style={
            day.includes(WEEK.TUESDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          화
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.WEDNESDAY)}>
        <Text
          style={
            day.includes(WEEK.WEDNESDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          수
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.THURSDAY)}>
        <Text
          style={
            day.includes(WEEK.THURSDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          목
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.FLIDAY)}>
        <Text
          style={
            day.includes(WEEK.FLIDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          금
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={alarmSettingStyle.AlarmDayButton}
        onPress={() => dayOnpress(WEEK.SATURDAY)}>
        <Text
          style={
            day.includes(WEEK.SATURDAY)
              ? {color: 'red', fontWeight: 'bold'}
              : {color: 'black'}
          }>
          토
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

export const alarmSettingStyle = StyleSheet.create({
  AlarmContainer: {},
  AlarmTime: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  AlarmDayToggle: {},
  AlarmRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  RadioLayout: {height: 60},
  RadioGroup: {},
  Radio: {
    margin: 2,
  },
  AlarmHourControl: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F4AE40',
    margin: 2,
    padding: 6,
    height: 40,
  },
  AlarmMinControl: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EC5375',
    margin: 2,
    padding: 6,
    height: 40,
  },
  AlarmPicker: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  AlarmDay: {
    alignItems: 'flex-start',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  AlarmDayButton: {
    flex: 1,
    padding: 15,
  },
  AlarmEnterButton: {
    justifyContent: 'flex-end',
  },
});
