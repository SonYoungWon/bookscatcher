/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import HTML from 'react-native-render-html';

export default ({book}) => {
    return (
    <Layout style={styles.container}>
        <Text style={styles.textSubject} category="h6" >책소개</Text>
        <HTML html={book.description} />

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
