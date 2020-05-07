import React from 'react';
import firestore from '@react-native-firebase/firestore';

// 내 프로필
// 유저 정보 생성
export const setUser = async userInfo => {
  await firestore()
    .collection('User')
    .add({
      uid: userInfo.uid,
      email: userInfo.email,
      nick: userInfo.nick,
      avatar: userInfo.avatar,
      score: userInfo.score,
      alarm: userInfo.alarm,
    })
    .then(() => {
      console.log('setUser added!');
    });
};
// 내 정보 가져오기
export const getMe = async uid => {
  const me = await firestore()
    .collection('User')
    .where('uid', '==', uid)
    .get()
    .then(snapshot => {
      console.log('me: ', snapshot._docs);
    });
};
// 책, 완독한 책, 독후감 쓴 책 가져오기 (Book API: getMyBooks())
// 아바타, 닉네임 수정
export const updateUser = async userInfo => {
  await firestore()
    .collection('User')
    .doc(userInfo.id)
    .update({
      avatar: userInfo.avatar,
      nick: userInfo.nick,
      createAt: new Date(),
    })
    .then(() => {
      console.log('updateUser added!');
    });
};

// 독서 알람
// 독서 알람 리스트 가져오기
export const getAlarm = async userId => {
  const me = await firestore()
    .collection('Alarm')
    .where('user', '==', userId)
    .get()
    .then(snapshot => {
      console.log('getAlarm: ', snapshot._docs);
    });
};
// 독서 알람 설정하기
export const setAlarm = async alarmInfo => {
  await firestore()
    .collection('Alarm')
    .add({
      user: alarmInfo.user,
      am: alarmInfo.am,
      hour: alarmInfo.hour,
      min: alarmInfo.min,
      after: alarmInfo.after,
      week: alarmInfo.week,
      bell: alarmInfo.bell,
      createAt: new Date(),
    })
    .then(() => {
      console.log('setUser added!');
    });
};
// 독서 알람 수정하기
export const updateAlarm = async alarmInfo => {
  await firestore()
    .collection('Alarm')
    .doc(alarmInfo.id)
    .update({
      avatar: alarmInfo.avatar,
      nick: alarmInfo.nick,
      createAt: new Date(),
    })
    .then(() => {
      console.log('updateUser added!');
    });
};
