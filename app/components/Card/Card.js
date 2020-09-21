import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({ image, subTitle, title, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image
                    resizeMode='cover'
                    style={styles.img}
                    source={image}
                />
                <View style={styles.inner}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle} numberOfLines={2}>
                        {subTitle}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
        flex: 1,
        fontSize: 18,
        marginBottom: 7,
    },
    subTitle: {
        flex: 1,
        fontSize: 18,
        color: colors.secondary,
    }
})

export default Card;

