import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Layout, Card} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {width, theme} from '../../global/globalBucket';
import {withNavigation} from '@react-navigation/compat';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url: '../../assets/book1.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url: '../../assets/book2.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url: '../../assets/book3.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d32',
    title: 'Third Item',
    url: '../../assets/book3.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29472',
    title: 'Third Item',
    url: '../../assets/book3.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29572',
    title: 'Third Item',
    url: '../../assets/book3.jpg',
  },
];

const ProfileBooksFlat = ({navigation}) => {
  const bookOnpress = () => {
    navigation.navigate('BookDetail');
  };

  const Item = title => {
    return (
      <Layout style={styles.flatItemContainer}>
        <Card onPress={() => bookOnpress()}>
          <Image width={width / 5} source={require('../../assets/book1.jpg')} />
        </Card>
      </Layout>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  flatItemContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: theme.pointColor,
  },
});

export default withNavigation(ProfileBooksFlat);
