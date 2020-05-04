/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {SCREEN} from '../global/enum';
import {Layout, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {BackIcon, AddIcon, MaximumIcon, SearchIcon, backOnpress} from './bucket';

export const TopNavigationAccessoriesShowcase = ({navigation, route, type = ''}) => {
  const RenderRightMemoActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={MaximumIcon} />
      <TopNavigationAction icon={SearchIcon} />
      <TopNavigationAction icon={AddIcon} />
    </React.Fragment>
  );

  const RenderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={AddIcon} />
    </React.Fragment>
  );

  const RenderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => backOnpress(navigation)}
    />
  );
  const getHeaderRight = () => {
    switch (route.name) {
      case SCREEN.BOOKMEMO:
        return RenderRightMemoActions(navigation);
      case SCREEN.BOOKADD:
        return RenderRightActions(navigation);
      case SCREEN.ALARMLIST:
        return RenderRightActions(navigation);
      default:
        return null;
    }
  };

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="start"
        title={route.params.title}
        subtitle="Subtitle"
        accessoryLeft={RenderBackAction}
        accessoryRight={getHeaderRight}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
