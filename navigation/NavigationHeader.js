import React from 'react';
import {StyleSheet} from 'react-native';
import {SCREEN, MEMO, ADD, SORT} from '../global/enum';
import {nullCheck} from '../global/globalBucket';
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {
  BackIcon,
  AddIcon,
  SearchIcon,
  EditIcon,
  backOnpress,
  arrowDownIcon,
} from './bucket';
import {withNavigation} from '@react-navigation/compat';

const TopNavigationAccessoriesShowcase = ({
  navigation,
  route,
  type = '',
  state = null,
}) => {
  const title = nullCheck(route.params)
    ? route.params.title.substring(0, 16)
    : route.name.substring(0, 16);

  const RenderRightMemoActions = () => {
    return (
      <React.Fragment>
        <TopNavigationAction
          icon={EditIcon}
          onPress={() =>
            state.setMode(state.mode === MEMO.VIEW ? MEMO.WRITE : MEMO.VIEW)
          }
        />
        <TopNavigationAction
          icon={arrowDownIcon}
          onPress={() =>
            state.setSort(state.sort === SORT.ASC ? SORT.DESC : SORT.ASC)
          }
        />
        <TopNavigationAction
          onPress={() => state.setAdd(ADD.ADD)}
          icon={AddIcon}
        />
      </React.Fragment>
    );
  };

  const RenderRightReviewActions = () => {
    return (
      <React.Fragment>
        <TopNavigationAction
          icon={EditIcon}
          onPress={() =>
            state.setMode(state.mode === MEMO.VIEW ? MEMO.WRITE : MEMO.VIEW)
          }
        />
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
        return RenderRightMemoActions(navigation);
      case SCREEN.BOOKREVIEW:
        return RenderRightReviewActions(navigation);
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
