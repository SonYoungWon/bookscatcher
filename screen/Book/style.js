import {StyleSheet} from 'react-native';
import {iconSize} from '../../global/globalBucket';

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

export const BookMemoStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ScrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  MemoLayout: {
    flex: 1,
  },
  MemoTitle: {
    margin: 20,
  },
  MemoHeader: {
    flexDirection: 'row',
  },
  DrawStyle: {
    justifyContent: 'flex-start',
  },
});
