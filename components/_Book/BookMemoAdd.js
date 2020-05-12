import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Card, Button, Input} from '@ui-kitten/components';
import {ADD} from '../../global/enum';
import {setMemo} from '../../global/APIBook';
import {useInputState} from '../../global/globalBucket';

export default ({setAdd, book}) => {
  const chapterInput = useInputState();
  const contentInput = useInputState();

  const memoOnpress = () => {
    setMemo({
      book: book,
      chapter: chapterInput.value,
      content: contentInput.value,
    });
    setAdd(ADD.NOTADD);
  };

  const Header = props => (
    <View {...props}>
      <Input
        style={styles.input}
        size="medium"
        placeholder="Medium"
        {...chapterInput}
      />
    </View>
  );

  const Footer = book => (
    <View style={styles.footerContainer}>
      <Button
        onPress={() => setAdd(ADD.NOTADD)}
        style={styles.footerControl}
        size="small"
        status="basic">
        취소
      </Button>
      <Button
        onPress={() => memoOnpress(book)}
        style={styles.footerControl}
        size="small"
        status="danger">
        확인
      </Button>
    </View>
  );

  return (
    <Layout style={{flex: 1}}>
      <Card style={styles.card} header={Header} footer={() => Footer(book)}>
        <Input
          multiline={true}
          textStyle={{minHeight: 64}}
          placeholder="Multiline"
          {...contentInput}
        />
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
    margin: 10,
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
