import {StyleSheet} from 'react-native';
import {width, height} from '../../global/globalBucket';

export const authStyle = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  KeyboardAwareScrollView: {
    flexGrow: 1,
    height: height,
  },
  LoginLogoLayout: {},
  LoginInputLayout: {
    flex: 1,
  },
  BackgroundImage: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  },
  LoginLayout: {
    flex: 1,
    padding: 20,
    width: width * 0.8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  LoginHeaderLayout: {
    paddingLeft: '5%',
  },
  LoginHeaderText: {
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#A6AEBF',
  },
});

export const profileStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ProfileInfo: {
    width: width,
  },
  ProfileInfoName: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  ProfileBooks: {
    flex: 1,
  },
  ProfileBooksSection: {
    flex: 1,
  },
});

export const alarmStyle = StyleSheet.create({
  AlarmContainer: {
    flex: 1,
  },
});

export const alarmSettingStyle = StyleSheet.create({
  AlarmContainer: {
    backgroundColor: 'white',
  },
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
