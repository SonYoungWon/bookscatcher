import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, MenuItem, OverflowMenu, Icon} from '@ui-kitten/components';
import {iconSize, theme, height} from '../global/globalBucket';

export const NavigationLeft = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onItemSelect = index => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={styles.IconLeftLayout}>
      <Icon
        style={styles.IconAddSize}
        fill={theme.pointColor}
        name="menu-outline"
      />
    </TouchableOpacity>
  );

  const homeOnpress = () => {
    setVisible(false);
    navigation.navigate('Home');
  };

  const profileOnpress = () => {
    setVisible(false);
    navigation.navigate('Profile');
  };

  return (
    <Layout style={styles.container} level="1">
      <OverflowMenu
        anchor={renderToggleButton}
        backdropStyle={styles.backdrop}
        visible={visible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}>
        <MenuItem title="HOME" onPress={() => homeOnpress()} />
        <MenuItem title="PROFILE" onPress={() => profileOnpress()} />
      </OverflowMenu>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  IconLeftLayout: {},
  IconAddSize: {
    width: iconSize,
    height: iconSize,
    margin: 20,
  },
});
