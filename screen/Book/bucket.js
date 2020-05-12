import {myBooks} from '../../global/globalBucket';
import {NAVER} from '../../global/manage';
import axios from 'axios';

export const bookCasePreload = async (setBooks, setIsLoad) => {
  setIsLoad(true);
  const books = await myBooks();
  setBooks(books);
  setIsLoad(false);
};

export const searchProcess = async (keyword, page) => {
  if (keyword === '') {
    return;
  }
  const {data} = await axios.get(
    `https://openapi.naver.com/v1/search/book.json?query=${keyword}&start=${page}&sort=count`,
    {
      headers: NAVER,
    },
  );
  return data;
};
