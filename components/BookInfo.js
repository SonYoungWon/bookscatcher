import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {width} from '../global/globalBucket';
import BookStatus from './Lottie/BookStatus';
import {withNavigation} from '@react-navigation/compat';

let _navigation = null;

const Footer = props => {
  return (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button style={styles.footerControl} size="small" status="danger">
        정독 완료
      </Button>
    </View>
  );
};

const BookInfo = ({navigation}) => {
  _navigation = navigation;
  return (
    <React.Fragment>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card}>
          <Image width={width / 2.5} source={require('../assets/book1.jpg')} />
        </Card>
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus />
          </Layout>
          <Text style={styles.textTitle} category="h6">
            별의 계승자
          </Text>
          <Text style={styles.textAuthor} category="s2">
            거스 히딩크 / 아베신조
          </Text>
          <Text style={styles.textAuthor} category="s2">
            25000원
          </Text>
          <Text style={styles.textAuthor} category="s2">
            한빛출판사
          </Text>
          <Text style={styles.textAuthor} category="s2">
            2019-02-30
          </Text>
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
