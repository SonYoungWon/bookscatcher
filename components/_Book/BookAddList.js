import React, {useRef} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {
  width,
  oddEven,
  removeTag,
  removeSpace,
} from '../../global/globalBucket';
import BookStatus from '../Lottie/BookStatus';
import {withNavigation} from '@react-navigation/compat';
import {getBookCheck} from '../../global/APIBook';
import {} from '../_bucket';

let _navigation = null;
const detailOnpress = data => {
  getBookCheck(data);
};

const Footer = data => {
  return (
    <View style={styles.footerContainer}>
      <Button style={styles.footerControl} size="small" status="basic">
        INFO
      </Button>
      <Button
        onPress={() => detailOnpress(data)}
        style={styles.footerControl}
        size="small"
        status="danger">
        ADD
      </Button>
    </View>
  );
};

const BookList = ({navigation, data}) => {
  _navigation = navigation;
  const flatListRef = useRef();

  const LeftView = ({data}) => (
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card} status="danger">
        <Image width={width / 3} source={{uri: data.image}} />
      </Card>
      <Card style={styles.card} footer={() => Footer(data)}>
        <Layout style={styles.reviewLogo}>
          <BookStatus />
        </Layout>
        <Text category="h6" style={{paddingBottom: 15}}>
          {data.title}
        </Text>
        <Text category="s2" style={{paddingBottom: 5}}>
          {data.author}
        </Text>
        <Text category="s2">{data.date}</Text>
      </Card>
    </Layout>
  );

  const RightView = ({data}) => (
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card} footer={() => Footer(data)}>
        <Layout style={styles.reviewLogo}>
          <BookStatus active={true} />
        </Layout>
        <Text category="h6" style={{paddingBottom: 15}}>
          {data.title}
        </Text>
        <Text category="s2" style={{paddingBottom: 5}}>
          {data.author}
        </Text>
        <Text category="s2">{data.date}</Text>
      </Card>
      <Card style={styles.card} status="danger">
        <Image width={width / 3} source={{uri: data.image}} />
      </Card>
    </Layout>
  );

  const _renderItem = (item, index) => {
    const id = removeSpace(item.isbn);
    const title = removeTag(item.title);
    const author = removeTag(item.author);
    const date =
      item.pubdate.substring(0, 4) +
      '년 ' +
      item.pubdate.substring(5, 6) +
      '월 ' +
      item.pubdate.substring(7, 8) +
      '일';

    const addItem = {
      id: id,
      title: title,
      author: author,
      date: date,
      image: item.image,
      description: item.description,
      price: item.price,
      translator: item.translator,
    };

    return oddEven(index) === true ? (
      <LeftView data={addItem} />
    ) : (
      <RightView data={addItem} />
    );
  };

  // author, code, description, image, price, pubdate, title, translator, user

  return (
    <Layout style={styles.constainer}>
      <FlatList
        data={data}
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
