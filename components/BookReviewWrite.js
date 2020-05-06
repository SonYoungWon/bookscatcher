import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Layout, Text, Input} from '@ui-kitten/components';
import ImageOverlay from 'react-native-image-overlay';
import {useInput} from '../global/globalBucket';
import InputScrollView from 'react-native-input-scroll-view';

export default () => {
  const reviewInput = useInput(
    '이 편지는 영국에서 시작되어 여기까지 왔습니다. 한샘인테리어 수산교회 송설감정평가 투자상담환영 파장동 상아아파트 한일타운 창룡문 홈프러스 등등 하하하하하하하하하하',
  );
  return (
    <Layout style={styles.container}>
      <ImageOverlay
        source={require('../assets/book4.jpg')}
        style={styles.headerContainer}>
        <Text style={styles.headerTitle} category="h1" status="control">
          CLEAN CODE
        </Text>
        <Text style={styles.headerDescription} category="s1" status="control">
          거스히딩크 / 아베 신조
        </Text>
      </ImageOverlay>
      <Layout style={styles.contentContainer} level="1">
        <InputScrollView>
          <Input
            multiline={true}
            textStyle={{minHeight: 64}}
            placeholder="Multiline"
            {...reviewInput}
          />
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
