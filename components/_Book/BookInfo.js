import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {width} from '../../global/globalBucket';
import {changeBookStatus} from '../../global/APIBook';
import BookStatus from '../Lottie/BookStatus';
import {withNavigation} from '@react-navigation/compat';

const BookInfo = ({navigation, book}) => {
  const [finish, setFinish] = useState(book.finish);

  const finishOnpress = () => {
    const status = finish ? false : true;
    setFinish(status);
    changeBookStatus(book.book, status);
  };
  return (
    <React.Fragment>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card}>
          <Image width={width / 2.5} source={{uri: book.image}} />
        </Card>
        <Card style={styles.card}>
          <Layout style={styles.reviewLogo}>
            <BookStatus />
          </Layout>
          <Text style={styles.textTitle} category="h6">
            {book.title}
          </Text>
          <Text style={styles.textAuthor} category="s2">
            {book.author}
          </Text>
          <Text style={styles.textAuthor} category="s2">
            {book.price}원
          </Text>
          <Text style={styles.textAuthor} category="s2">
            {book.createAt}
          </Text>
          <Button
            onPress={() => finishOnpress()}
            style={styles.footerControl}
            size="small"
            status={finish ? 'danger' : 'warning'}>
            {finish ? '정독완료' : '읽는 중'}
          </Button>
        </Card>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    borderWidth: 0,
  },
  footerContainer: {
    justifyContent: 'flex-end',
  },
  footerControl: {},
  reviewLogo: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  textTitle: {
    marginBottom: 20,
  },
  textAuthor: {
    marginBottom: 10,
  },
});

export default withNavigation(BookInfo);
