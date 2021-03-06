/* eslint-disable prettier/prettier */
import React from 'react';
import {Icon} from '@ui-kitten/components';

export const BackIcon = props => <Icon {...props} name="arrow-back" />;
export const AddIcon = props => <Icon {...props} name="plus-outline" />;
export const MaximumIcon = props => <Icon {...props} name="expand-outline" />;
export const SearchIcon = props => <Icon {...props} name="search-outline" />;
export const EditIcon = props => <Icon {...props} name="edit-2-outline" />;
export const BookIcon = props => <Icon {...props} name="book-open-outline" />;
export const PersonIcon = props => <Icon {...props} name="person-outline" />;
export const arrowUpIcon = props => <Icon {...props} name="arrowhead-up-outline" />;
export const arrowDownIcon = props => <Icon {...props} name="arrowhead-down-outline" />;
export const backOnpress = (navigation) => {
  navigation.goBack();
};
