import {StyleSheet} from 'react-native';
import {iconSize} from '../../global/globalBucket';
import {useTheme} from '@ui-kitten/components';
import {width, height} from '../../global/globalBucket';

export const BookCaseStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    flex: 1,
  },
  IconAddLayout: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  IconAddSize: {
    width: iconSize,
    height: iconSize,
    margin: 20,
  },
  HeaderText: {
    textAlign: 'center',
    alignItems: 'center',
    top: -1 * 50,
  },
});

export const BookAddStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
