import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Card, Text, Button, Input} from '@ui-kitten/components';
import {useInput} from '../global/globalBucket';
import {MEMO} from '../global/enum';

export default () => {
  const [mode, setMode] = useState(MEMO.VIEW);
  const text1 =
    'The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent';
  const memoInput = useInput();
  const Header = props => (
    <View {...props}>
      <Text category="h6">Maldives</Text>
      <Text category="s1">By Wikipedia</Text>
    </View>
  );

  const Footer = props => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button style={styles.footerControl} size="small" status="basic">
        취소
      </Button>
      <Button
        onPress={() =>
          mode === MEMO.VIEW ? setMode(MEMO.WRITE) : setMode(MEMO.VIEW)
        }
        style={styles.footerControl}
        size="small"
        status="danger">
        수정
      </Button>
    </View>
  );

  const MemoText = ({memoText}) => {
    return <Text>{memoText}</Text>;
  };

  const MemoInput = () => {
    return (
      <Input
        multiline={true}
        textStyle={{minHeight: 64}}
        placeholder="Multiline"
        {...memoInput}
      />
    );
  };

  return (
    <Layout>
      <Card style={styles.card} header={Header} footer={Footer}>
        <MemoText key="1" memoText={text1} />
      </Card>
      <Card style={styles.card} header={Header} footer={Footer}>
        <MemoText key="2" memoText={text1} />
      </Card>
      <Card style={styles.card} header={Header} footer={Footer}>
        <MemoText key="3" memoText={text1} />
      </Card>
      <Card style={styles.card} header={Header} footer={Footer}>
        <MemoText key="4" memoText={text1} />
      </Card>
      <Card style={styles.card} header={Header} footer={Footer}>
        <MemoText key="5" memoText={text1} />
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
    borderTopWidth: 0,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
