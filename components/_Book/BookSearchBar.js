import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Layout, Input, Icon} from '@ui-kitten/components';
import {width} from '../../global/globalBucket';

export default ({setKeyword}) => {
  const [value, setValue] = useState('');

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={() => setKeyword(value)}>
      <Icon {...props} name={'search-outline'} />
    </TouchableWithoutFeedback>
  );
  return (
    <Layout style={styles.Container}>
      <Input
        value={value}
        placeholder="Place your Text"
        accessoryRight={renderIcon}
        onChangeText={nextValue => setValue(nextValue)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
});
