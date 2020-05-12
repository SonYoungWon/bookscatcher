import React, {useRef} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {width, oddEven} from '../../global/globalBucket';
import BookStatus from '../Lottie/BookStatus';
import {withNavigation} from '@react-navigation/compat';

let _navigation = null;
const detailOnpress = book => {
  _navigation.navigate('BookDetail', {title: 'Clean Code', data: book});
};

const Footer = book => {
  return (
    <View style={styles.footerContainer}>
      <Button
        onPress={() => detailOnpress(book)}
        style={styles.footerControl}
        size="small"
        status="danger">
        INFO
      </Button>
    </View>
  );
};

const BookList = ({navigation, data, header}) => {
  _navigation = navigation;
  const flatListRef = useRef();
  const LeftView = ({book}) => {
    return (
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={{uri: book.image}} />
        </Card>
        <Card style={styles.card} footer={() => Footer(book)}>
          <Layout style={styles.reviewLogo}>
            <BookStatus />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            {book.title}
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            {book.author}
          </Text>
        </Card>
      </Layout>
    );
  };

  const RightView = ({book}) => {
    return (
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} footer={() => Footer(book)}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            {book.title}
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            {book.author}
          </Text>
        </Card>
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={{uri: book.image}} />
        </Card>
      </Layout>
    );
  };

  const _renderItem = (item, index) => {
    return oddEven(index) === true ? (
      <LeftView book={item} />
    ) : (
      <RightView book={item} />
    );
  };

  return (
    <Layout style={styles.constainer}>
      <FlatList
        data={data}
        ListHeaderComponent={header}
        renderItem={({item, index}) => _renderItem(item, index)}
        keyExtractor={(item, index) => item.title}
        numColumns={1}
        ref={flatListRef}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  footerControl: {},
  reviewLogo: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
});

export default withNavigation(BookList);
