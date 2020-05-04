import {StyleSheet} from 'react-native';
import {width, height} from '../../global/globalBucket';

export const authStyle = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  BackgroundImage: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  },
  LoginLayout: {
    padding: 20,
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  LoginHeaderLayout: {
    paddingLeft: '5%',
    paddingTop: 20,
  },
  LoginHeaderText: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#A6AEBF',
  },
});
