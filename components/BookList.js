import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {width} from '../global/globalBucket';
import BookStatus from './Lottie/BookStatus';
import {withNavigation} from '@react-navigation/compat';

let _navigation = null;
const detailOnpress = () => {
  _navigation.navigate('Details', {title: 'Clean Code'});
};

const Footer = props => {
  return (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button style={styles.footerControl} size="small" status="basic">
        INFO
      </Button>
      <Button
        onPress={detailOnpress}
        style={styles.footerControl}
        size="small"
        status="danger">
        DETAIL
      </Button>
    </View>
  );
};

const BookList = ({navigation}) => {
  _navigation = navigation;
  return (
    <React.Fragment>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book1.jpg')} />
        </Card>
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book2.jpg')} />
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book3.jpg')} />
        </Card>
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book4.jpg')} />
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book5.jpg')} />
        </Card>
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book6.jpg')} />
        </Card>
      </Layout>
      <Layout style={styles.topContainer} level="1">
        <Card style={styles.card} status="danger">
          <Image width={width / 3} source={require('../assets/book7.jpg')} />
        </Card>
        <Card style={styles.card} footer={Footer}>
          <Layout style={styles.reviewLogo}>
            <BookStatus active={true} />
          </Layout>
          <Text category="h6" style={{paddingBottom: 15}}>
            별의 계승자
          </Text>
          <Text category="s2" style={{paddingBottom: 5}}>
            거스 히딩크 / 아베신조
          </Text>
          <Text category="s2">2019-02-30</Text>
        </Card>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
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
  },
  footerControl: {},
  reviewLogo: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
});

export default withNavigation(BookList);
