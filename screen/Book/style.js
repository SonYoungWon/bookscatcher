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
  EmptyText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export const BookDetailStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export const BookAddStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
  EmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  headerContainer: {
    alignItems: 'center',
    minHeight: 256,
    paddingVertical: 24,
  },
  headerTitle: {
    textAlign: 'center',
    marginVertical: 24,
    zIndex: 1,
  },
  headerDescription: {
    zIndex: 1,
  },
});
