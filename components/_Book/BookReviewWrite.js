import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Layout, Input, Button} from '@ui-kitten/components';
import InputScrollView from 'react-native-input-scroll-view';
import {useInputState, height, nullCheck} from '../../global/globalBucket';
import {setReview, updateReview} from '../../global/APIBook';
import {REVIEW} from '../../global/enum';

export default ({review, book, setMode}) => {
  const reviewInput = useInputState(review.content);
  const reviewOnpress = () => {
    if (!nullCheck(review.content)) {
      setReview({book: book, content: reviewInput.value});
    } else {
      updateReview({book: book, content: reviewInput.value});
    }
    setMode(REVIEW.VIEW);
  };
  return (
    <Layout style={styles.container}>
      <Layout style={styles.contentContainer} level="1">
        <InputScrollView>
          <Input
            multiline={true}
            textStyle={{minHeight: height / 3}}
            placeholder="독후감을 입력해주세요"
            {...reviewInput}
          />
          <Button
            onPress={() => reviewOnpress()}
            style={styles.footerControl}
            size="medium"
            status="danger">
            저장하기
          </Button>
        </InputScrollView>
      </Layout>
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
});
