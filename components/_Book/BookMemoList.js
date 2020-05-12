/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerItem, DrawerGroup, Drawer, Text} from '@ui-kitten/components';
import {withNavigation} from '@react-navigation/compat';

const BookMemoList = ({navigation, memo}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const DrawGroupComponents = ({_data}) => (
    <DrawerGroup DrawerGroup title={_data.subject}>
      <DrawerItem title={_data.content} />
    </DrawerGroup>
  );

  return (
    <>
      {memo ? (
        <Drawer
          contentContainerStyle={Styles.DrawStyle}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          {memo.map(({_data}, index) => (
            <DrawGroupComponents key={index} _data={_data} />
          ))}
        </Drawer>
      ) : (
        <Text>메모가 없어요</Text>
      )}
    </>
  );
};

export const Styles = StyleSheet.create({
  DrawStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
});

export default withNavigation(BookMemoList);
