import React from 'react';
import firestore from '@react-native-firebase/firestore';

// 책장
// 내가 보유하고 있는 책 가져오기
export const getMyBooks = async userId => {
  const myBooks = await firestore()
    .collection('MyBook')
    .where('user', '==', userId)
    .get()
    .then(snapshot => {
      console.log('getMyBooks: ', snapshot._docs);
    });
};

// 책디테일
// 내책 상태
export const getMyBook = async myBookId => {
  const myBook = await firestore()
    .collection('MyBook')
    .doc(myBookId)
    .get()
    .then(snapshot => {
      console.log('getMyBook: ', snapshot._docs);
    });
};
// 해당책 정보
export const getBookInfo = async bookId => {
  const bookInfo = await firestore()
    .collection('Book')
    .doc(bookId)
    .get()
    .then(snapshot => {
      console.log('getBookInfo: ', snapshot._docs);
    });
};

// 책 추가
// Book테이블에 책 있는지 체크
export const getBookCheck = async code => {
  const bookCheck = await firestore()
    .collection('Book')
    .where('code', '==', code)
    .get()
    .then(snapshot => {
      console.log('getBookCheck: ', snapshot._docs);
    });
};
// Book테이블에 책이 없으면 책 추가
export const addBook = async bookInfo => {
  await firestore()
    .collection('Book')
    .add({
      title: bookInfo.title,
      price: bookInfo.price,
      author: bookInfo.author,
      translator: bookInfo.translator,
      code: bookInfo.code,
      description: bookInfo.description,
      thumbnail: bookInfo.thumbnail,
    })
    .then(() => {
      console.log('addBook added!');
    });
};
// MyBook에 해당 책 추가
export const addMyBook = async bookInfo => {
  await firestore()
    .collection('MyBook')
    .add({
      user: bookInfo.user,
      book: bookInfo.book,
      memo: bookInfo.memo,
      review: bookInfo.review,
      finish: bookInfo.finish,
      leave: bookInfo.leave,
      createAt: bookInfo.createAt,
    })
    .then(() => {
      console.log('addMyBook added!');
    });
};

// 메모
// 해당 책의 메모 가져오기
export const getMemo = async bookId => {
  const memo = await firestore()
    .collection('Memo')
    .where('myBook', '==', bookId)
    .get()
    .then(snapshot => {
      console.log('getMemo: ', snapshot._docs);
    });
};
// 해당 책의 메모 쓰기
export const setMemo = async memoInfo => {
  await firestore()
    .collection('Memo')
    .add({
      myBook: memoInfo.myBook,
      subject: memoInfo.subject,
      content: memoInfo.content,
      createAt: new Date(),
    })
    .then(() => {
      console.log('setMemo added!');
    });
};
// 해당 책의 메모 수정
export const updateMemo = async memoInfo => {
  await firestore()
    .collection('Memo')
    .doc(memoInfo.id)
    .update({
      subject: memoInfo.subject,
      content: memoInfo.content,
      createAt: new Date(),
    })
    .then(() => {
      console.log('updateMemo added!');
    });
};
// 해당 책의 메모 키워드 검색

// 독후감
// 해당 책의 독후감 가져오기
export const getReview = async bookId => {
  const review = await firestore()
    .collection('Memo')
    .where('myBook', '==', bookId)
    .get()
    .then(snapshot => {
      console.log('getReview: ', snapshot._docs);
    });
};
// 해당 책의 독후감 쓰기
export const setReview = async reviewInfo => {
  await firestore()
    .collection('Review')
    .add({
      myBook: reviewInfo.myBook,
      subject: reviewInfo.subject,
      content: reviewInfo.content,
      createAt: new Date(),
    })
    .then(() => {
      console.log('setReview added!');
    });
};
// 해당 책의 독후감 수정
export const updateReview = async memoInfo => {
  await firestore()
    .collection('Review')
    .doc(memoInfo.id)
    .update({
      subject: memoInfo.subject,
      content: memoInfo.content,
      createAt: new Date(),
    })
    .then(() => {
      console.log('updateReview added!');
    });
};
