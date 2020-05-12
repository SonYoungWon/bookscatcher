import React, {useState} from 'react-native';
import {AsyncStorage} from 'react-native';
import {fireWhere, nullArrayCheck} from '../../global/globalBucket';
import {getMe, setUser} from '../../global/APIUser';

export const loginHandle = user => {
  getMe(user.uid).then(async snapshot => {
    const me = fireWhere(snapshot);
    if (!nullArrayCheck(me)) {
      setUser(user);
    }

    await AsyncStorage.setItem('uid', user.uid);
  });
};
