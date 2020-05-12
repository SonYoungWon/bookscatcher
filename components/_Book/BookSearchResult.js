import React, {useState, useRef} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {Layout, Card} from '@ui-kitten/components';
import {width, height} from '../../global/globalBucket';

export default ({data, setPage}) => {
  const flatListRef = useRef();

  const _renderItem = item => {
    return (
      <Layout>
        <Image source={{uri: item.image}} style={styles.Image} />
      </Layout>
    );
  };

  const imageContinue = async () => {
    try {
    } catch (e) {}
  };

  return (
    <Layout style={styles.container}>
      <FlatList
        data={data.items}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        ref={flatListRef}
        onEndReached={() => {
          imageContinue();
        }}
        onEndReachedThreshold={0.5}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  card: {
    flex: 1,
    margin: 2,
  },
  image: {
    width: '100%',
  },
});
