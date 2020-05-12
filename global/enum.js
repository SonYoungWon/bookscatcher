/* eslint-disable prettier/prettier */
export const SCREEN = {
  HOME: 'Home',
  BOOKDETAIL: 'BookDetail',
  BOOKINFO: 'BookInfo',
  BOOKMEMO: 'BookMemo',
  BOOKREVIEW: 'BookReview',
  BOOKSHARE: 'BookShare',
  BOOKADD: 'BookAdd',
  MYALARMLIST: 'MyAlarmList',
  MYALARMSETTING: 'MyAlarmSetting',
  MYBOOKCASEREMOVE: 'MyBookCaseRemove',
  LOGIN: 'Login',
  MYREVIEWLIST: 'MyReviewList',
  MYREVIEWWATCH: 'MyReviewWatch',
  MYPROFILE: 'MyProfile',
};

export const SOCIAL = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  KAKAO: 'KAKAO',
  APPLE: 'APPLE',
  EMAIL: 'EMAIL',
};

export const MEMO = {
  VIEW: 'view',
  WRITE: 'write',
};

export const ADD = {
  ADD: true,
  NOTADD: false,
};

export const REVIEW = {
  VIEW: 'view',
  WRITE: 'write',
};

export const SORT = {
  DESC: 'desc',
  ASC: 'asc',
};

export const HOUR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const MIN = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

export const TIMERANGE = [0,30,60,90,120,150,180,210,240,270,300];

export const WEEK = {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FLIDAY: 'FLIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY',
};



export const _BOOK = {
  TITLE: 'title',
  PRICE: 'price',
  AUTHOR: 'author',
  TRANSLATOR: 'translator',
  CODE: 'code',
  DESCRIPTION: 'description',
  thumbnail: 'thumbnail',
};

export const _MYBOOK = {
  USER: 'user',
  BOOK: 'book',
  MEMO: 'memo',
  REVIEW: 'review',
  FINISH: 'finish',
  LEAVE: 'leave',
  CREATEAT: 'createAt',
};

export const _MEMO = {
  MYBOOK:'myBook',
  SUBJECT:'subject',
  CONTENT:'content',
  CREATEAT:'createAt',
};

export const _REVIEW = {
  MYBOOK:'myBook',
  SUBJECT:'subject',
  CONTENT:'content',
  CREATEAT:'createAt',
};

export const _USER = {
  UID: 'uid',
  EMAIL: 'email',
  NICK: 'nick',
  AVATAR: 'avatar',
  SCORE: 'score',
  ALARM: 'alarm',
};

export const _ALARM = {
  USER: 'user',
  AM: 'am',
  HOUR: 'hour',
  MIN: 'min',
  AFTER: 'after',
  WEEK: 'week',
  BELL: 'bell',
  CREATEAT: 'createAt',
};

export const NOTICE = {
  LOGINFAIL : '로그인 실패',
  LOGINALEADY: '이미 가입된 아이디가 있습니다',
  ALEADYEMAIL: '이미 있는 이메일입니다.',
  ALEADYREGEX: '아이디는 이메일 형식이어야 합니다.',
  ALEADYBOOK: '이 책은 이미 책장에 있어요~',
  ADDBOOK: '책이 추가되었어요!',
};
