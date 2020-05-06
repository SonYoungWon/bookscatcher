import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerItem, DrawerGroup, Drawer} from '@ui-kitten/components';

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [title, setTitle] = useState(
    '이 편지는 영국에서 시작되어 여기까지 왔습니다. 한샘인테리어 수산교회 송설감정평가 투자상담환영 파장동 상아아파트 한일타운 창룡문 홈프러스 등등 하하하하하하하하하하',
  );

  return (
    <Drawer
      contentContainerStyle={Styles.DrawStyle}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <DrawerGroup DrawerGroup title="1장 행운의 편지.">
        <DrawerItem title={title} />
      </DrawerGroup>
      <DrawerGroup DrawerGroup title="3장 불행의 편지.">
        <DrawerItem title={title} />
      </DrawerGroup>
      <DrawerGroup DrawerGroup title="5장 행복의 편지.">
        <DrawerItem title={title} />
      </DrawerGroup>
    </Drawer>
  );
};

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ScrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  MemoLayout: {
    flex: 1,
  },
  MemoTitle: {
    margin: 20,
  },
  DrawStyle: {
    justifyContent: 'flex-start',
  },
});
