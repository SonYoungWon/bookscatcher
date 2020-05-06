/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export default () => {
    return (
    <Layout style={styles.container}>
        <Text style={styles.textSubject} category="h6" >책소개</Text>
        <Text style={styles.textSubject} category="s2" >
            “독서는 읽기를 뛰어넘는 인생 혁명이다!”
            ‘우리는 왜 독서를 해야 하는가?’라는 질문보다 앞서야 하는 것은
            ‘독서란 진정 무엇인가?’이다.

            ‘독서를 어떻게 해야 하는가?’라는 질문보다 앞서야 하는 것은
            ‘인간은 어떻게 인식하고 배우고 성장하는가?’이다.

            [48분 독서]+[초의식 독서]+[퀀텀 독서]를 잇는 또 하나의 역작!
            3년 만 권 독서, 3000명의 독서천재를 양성한
            독서법 대가(大家) 김병완의 책 읽기 노하우를 한 권으로 만나다!
        </Text>
    </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        margin:10,
    },
    textSubject: {
        fontStyle: 'italic',
        marginBottom: 15,
    },
    textContent: {
        fontStyle: 'italic',
    },
});
