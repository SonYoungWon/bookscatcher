/* eslint-disable prettier/prettier */
import React from 'react';
import {Icon} from '@ui-kitten/components';

export const BackIcon = props => <Icon {...props} name="arrow-back" />;
export const AddIcon = props => <Icon {...props} name="plus-outline" />;
export const MaximumIcon = props => <Icon {...props} name="expand-outline" />;
export const SearchIcon = props => <Icon {...props} name="search-outline" />;

export const backOnpress = (navigation) => {
  navigation.goBack();
};
