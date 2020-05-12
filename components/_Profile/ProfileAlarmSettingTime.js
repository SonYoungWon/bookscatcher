import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Layout, Toggle, Text} from '@ui-kitten/components';
import {HOUR, MIN, TIMERANGE} from '../../global/enum';

export default ({route, navigation}) => {
  const [day, setDay] = useState([]);
  const [hour, setHour] = useState();
  const [minit, setMinit] = useState();
  const [timeRange, setTimeRange] = useState();

  return (
    <>
      <Layout style={alarmSettingStyle.AlarmTime}>
        <Toggle status="primary" checked={day} onChange={day => setDay(day)}>
          {day ? '오후' : '오전'}
        </Toggle>
      </Layout>
      <Layout style={alarmSettingStyle.AlarmTime}>
        <Picker
          selectedValue={hour}
          style={alarmSettingStyle.AlarmPicker}
          onValueChange={(itemValue, itemIndex) => setHour(itemValue)}>
          {HOUR.map((h, index) => (
            <Picker.Item key={index} label={index + '시'} value={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={minit}
          style={alarmSettingStyle.AlarmPicker}
          onValueChange={(itemValue, itemIndex) => setMinit(itemValue)}>
          {MIN.map((h, index) => (
            <Picker.Item key={index} label={index + '분'} value={index} />
          ))}
        </Picker>
        <Text category="s2" status="warning">
          부터{' '}
        </Text>
        <Picker
          selectedValue={timeRange}
          style={alarmSettingStyle.AlarmPicker}
          onValueChange={(itemValue, itemIndex) => setTimeRange(itemValue)}>
          {TIMERANGE.map((h, index) => (
            <Picker.Item key={index} label={h + '분'} value={h} />
          ))}
        </Picker>
      </Layout>
    </>
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
