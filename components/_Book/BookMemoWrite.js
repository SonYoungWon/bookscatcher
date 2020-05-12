import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Card, Text, Button, Input} from '@ui-kitten/components';
import {useInputState} from '../../global/globalBucket';
import {updateMemo} from '../../global/APIBook';

export default ({memo, getMemoList}) => {
  const [selected, setSelected] = useState();
  const chapterInput = useInputState();
  const contentInput = useInputState();

  const cancelOnpress = () => {
    setSelected();
  };

  const Header = data => (
    <View style={styles.topContainer}>
      {selected !== data.createAt ? (
        <Text category="h6">{data.subject}</Text>
      ) : (
        <Input
          style={styles.input}
          size="medium"
          placeholder="Medium"
          {...chapterInput}
        />
      )}
    </View>
  );

  const Footer = data => {
    const modifyOnpress = data => {
      updateMemo({
        subject: chapterInput.value,
        content: contentInput.value,
        book: data.myBook,
        createAt: data.createAt,
      });
      setSelected();
      getMemoList();
    };

    const inputActiveOnpress = data => {
      setSelected(data.createAt);
      chapterInput.onChangeText(data.subject);
      contentInput.onChangeText(data.content);
    };
    return (
      <View style={styles.footerContainer}>
        <Button
          onPress={() => cancelOnpress()}
          style={styles.footerControl}
          size="small"
          status="basic">
          취소
        </Button>
        <Button
          onPress={() =>
            selected ? modifyOnpress(data) : inputActiveOnpress(data)
          }
          disabled={
            !selected ? false : selected === data.createAt ? false : true
          }
          style={styles.footerControl}
          size="small"
          status="danger">
          수정
        </Button>
      </View>
    );
  };

  const MemoText = ({memoText}) => {
    return <Text>{memoText}</Text>;
  };

  return (
    <Layout style={styles.container}>
      {memo ? (
        memo.map(({_data}, index) => (
          <Card
            key={index}
            style={styles.card}
            header={() => Header(_data)}
            footer={() => Footer(_data)}>
            {selected !== _data.createAt ? (
              <MemoText key="1" memoText={_data.content} />
            ) : (
              <Input
                multiline={true}
                textStyle={{minHeight: 64}}
                placeholder="Multiline"
                {...contentInput}
              />
            )}
          </Card>
        ))
      ) : (
        <Text>메모가 없어요</Text>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    marginVertical: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
