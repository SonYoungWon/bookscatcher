import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Layout, Text} from '@ui-kitten/components';

export default ({review}) => {
  return (
    <Layout style={styles.container}>
      {review ? (
        <Layout style={styles.contentContainer} level="1">
          <Text>{review.content}</Text>
        </Layout>
      ) : (
        <Layout style={styles.emptyView}>
          <Text>독후감을 써주세요~</Text>
        </Layout>
      )}
      <Divider />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  authoringInfoContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  emptyView: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
