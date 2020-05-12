import React from 'react';
import {getBookInfo} from '../global/APIBook';

export const bookCheck = () => {
  return true;
};

export const getBook = async bookId => {
  return await getBookInfo(bookId);
};
