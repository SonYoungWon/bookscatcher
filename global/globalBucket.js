import React from 'react';
import {Dimensions, useWindowDimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from './globalStyle';

export const theme = Theme;
export const {width, height: fullHieght} = Dimensions.get('window');
export const height = fullHieght - getStatusBarHeight();
export const iconSize = 35;
export const nullCheck = param => {
  switch (param) {
    case '':
      return false;
    case undefined:
      return false;
    case 'undefined':
      return false;
    case null:
      return false;
    default:
      return true;
  }
};
