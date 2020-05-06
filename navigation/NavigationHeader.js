import React from 'react';
import {StyleSheet} from 'react-native';
import {SCREEN, MEMO} from '../global/enum';
import {nullCheck} from '../global/globalBucket';
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {BackIcon, AddIcon, SearchIcon, EditIcon, backOnpress} from './bucket';
import {withNavigation} from '@react-navigation/compat';

const TopNavigationAccessoriesShowcase = ({
  navigation,
  route,
  type = '',
  state = null,
}) => {
  const title = nullCheck(route.params) ? route.params.title : route.name;

  const RenderRightMemoActions = () => {
    return (
      <React.Fragment>
        <TopNavigationAction
          icon={EditIcon}
          onPress={() =>
            state.setMode(state.mode === MEMO.VIEW ? MEMO.WRITE : MEMO.VIEW)
          }
        />
        <TopNavigationAction icon={SearchIcon} />
        <TopNavigationAction icon={AddIcon} />
      </React.Fragment>
    );
  };

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
      case SCREEN.BOOKREVIEW:
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
        title={title}
        accessoryLeft={RenderBackAction}
        accessoryRight={getHeaderRight}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
});

export default withNavigation(TopNavigationAccessoriesShowcase);
