import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';

function Card(props) {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode='cover'
                style={styles.img}
                source={props.image}
            />
            <View style={styles.inner}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.subTitle}>
                    {props.subTitle}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 300,
        borderRadius: 20,
        justifyContent: 'center',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        marginVertical: 20,
        overflow: 'hidden',
    },
    inner: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        flex: 1,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
    },
    img: {
        width: '100%',
        height: '100%',
        flex: 4,
        borderRadius: 16,
        marginBottom: -16,
    },
    title: {
        fontSize: 18,
        marginBottom: 7,
    },
    subTitle: {
        fontSize: 18,
        color: colors.secondary,
    }
})

export default Card;

