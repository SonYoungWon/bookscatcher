import firestore from '@react-native-firebase/firestore';
import {
  UID,
  nullCheck,
  getMyBookID,
  getMemoID,
  getReviewID,
} from '../global/globalBucket';
import {Alert} from 'react-native';
import {NOTICE} from '../global/enum';

// 책장
// 내가 보유하고 있는 책 가져오기
export const getMyBooks = async () => {
  const uid = await UID();
  const {_docs: myBook} = await firestore()
    .collection('MyBook')
    .where('user', '==', uid)
    .get();

  const {_docs: book} = await firestore()
    .collection('Book')
    .where('user', 'array-contains', uid)
    .get();

  return {myBook: myBook, book: book};
};

// 책디테일
// 내책 상태
export const getMyBook = async myBookId => {
  return await firestore()
    .collection('MyBook')
    .doc(myBookId)
    .get();
};

// 해당책 정보
export const getBookInfo = async bookId => {
  return await firestore()
    .collection('Book')
    .doc(bookId)
    .get();
};

// 책 추가
// Book테이블에 책 있는지 체크
export const getBookCheck = async bookInfo => {
  const check = await firestore()
    .collection('Book')
    .doc(bookInfo.id)
    .get();

  if (check.exists) {
    addMyBook(bookInfo);
  } else {
    addBook(bookInfo);
    addMyBook(bookInfo);
  }
};

// Book테이블에 책이 없으면 책 추가
export const addBook = async bookInfo => {
  await firestore()
    .collection('Book')
    .doc(bookInfo.id)
    .set({
      id: bookInfo.id,
      title: bookInfo.title,
      price: bookInfo.price,
      author: bookInfo.author,
      translator: bookInfo.translator,
      description: bookInfo.description,
      image: bookInfo.image,
    })
    .then(() => {
      console.log('addBook added!');
    });
};
// MyBook에 해당 책 추가
export const addMyBook = async bookInfo => {
  const uid = await UID();
  const myBookId = await getMyBookID(bookInfo.id);
  const {_data} = await firestore()
    .collection('MyBook')
    .doc(myBookId)
    .get();

  if (nullCheck(_data)) {
    Alert.alert(NOTICE.ALEADYBOOK);
    return false;
  }

  await firestore()
    .collection('MyBook')
    .doc(myBookId)
    .set({
      user: uid,
      book: bookInfo.id,
      memo: null,
      review: null,
      finish: false,
      leave: false,
      createAt: bookInfo.createAt,
    })
    .then(() => {
      console.log('addMyBook added!');
    });

  await firestore()
    .collection('Book')
    .doc(bookInfo.id)
    .update({user: firestore.FieldValue.arrayUnion(uid)})
    .then(() => {
      console.log('Book Update');
      Alert.alert(NOTICE.ADDBOOK);
    });
};

// 정독 상태 변경
export const changeBookStatus = async (book, finish) => {
  const myBookId = await getMyBookID(book);

  await firestore()
    .collection('MyBook')
    .doc(myBookId) // (TODO) 마음에 안들어...
    .update({finish: finish});
};

// 메모
// 해당 책의 메모 가져오기
export const getMemo = async bookId => {
  const myBookID = await getMyBookID(bookId);

  return await firestore()
    .collection('Memo')
    .where('myBook', '==', myBookID)
    .get();
};
// 해당 책의 메모 쓰기
export const setMemo = async memoInfo => {
  const createAt = new Date().getTime();
  const myBookID = await getMyBookID(memoInfo.book);
  const memoID = await getMemoID(memoInfo.book, createAt);

  console.log('memoid', memoID);
  await firestore()
    .collection('Memo')
    .doc(memoID)
    .set({
      myBook: myBookID,
      subject: memoInfo.chapter,
      content: memoInfo.content,
      createAt: createAt,
    })
    .then(() => {
      console.log('setMemo added!');
    });
};
// 해당 책의 메모 수정
export const updateMemo = async memoInfo => {
  const memoID = memoInfo.book + '&' + memoInfo.createAt;
  await firestore()
    .collection('Memo')
    .doc(memoID)
    .update({
      subject: memoInfo.subject,
      content: memoInfo.content,
      updateAt: new Date(),
    })
    .then(() => {
      console.log('updateMemo added!');
    });
};
// 해당 책의 메모 키워드 검색

// 독후감
// 해당 책의 독후감 가져오기
export const getReview = async bookId => {
  const reviewID = await getReviewID(bookId);
  return await firestore()
    .collection('Review')
    .doc(reviewID)
    .get();
};
// 해당 책의 독후감 쓰기
export const setReview = async reviewInfo => {
  const reviewID = await getReviewID(reviewInfo.book.book);
  const myBookID = await getMyBookID(reviewInfo.book.book);
  await firestore()
    .collection('Review')
    .doc(reviewID)
    .set({
      myBook: myBookID,
      subject: '',
      content: reviewInfo.content,
      createAt: new Date().getTime(),
    })
    .then(() => {
      console.log('setReview added!');
    });
};
// 해당 책의 독후감 수정
export const updateReview = async reviewInfo => {
  const reviewID = await getReviewID(reviewInfo.book.book);
  await firestore()
    .collection('Review')
    .doc(reviewID)
    .update({
      subject: '',
      content: reviewInfo.content,
      updateAt: new Date().getTime(),
    })
    .then(() => {
      console.log('updateReview added!');
    });
};
