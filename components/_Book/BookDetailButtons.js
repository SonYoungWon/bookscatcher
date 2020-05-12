import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Layout} from '@ui-kitten/components';
import {withNavigation} from '@react-navigation/compat';

const BookDetailButtons = ({navigation, book}) => {
  const memoOnpress = () => {
    navigation.navigate('BookMemo', {title: book.title, data: book});
  };

  const reportOnpress = () => {
    navigation.navigate('BookReview', {title: 'Clean Code', data: book});
  };
  const shareOnpress = () => {
    navigation.navigate('BookMemo', {title: 'Clean Code', data: book});
  };
  return (
    <React.Fragment>
      <Layout style={styles.topContainer} level="1">
        <Button
          onPress={() => memoOnpress()}
          style={styles.button}
          size="large"
          status="basic">
          MEMO
        </Button>
        <Button
          onPress={() => reportOnpress()}
          style={styles.button}
          size="large"
          status="basic">
          BOOK REPORT
        </Button>
        <Button
          onPress={() => shareOnpress()}
          style={styles.button}
          size="large"
          status="basic">
          BOOK SHARE
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default withNavigation(BookDetailButtons);
