import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

function ListDetails(props) {
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
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
    },
    img: {
        width: '100%',
        height: '35%',

    },
    
    title: {
        fontSize: 20,
        lineHeight: 20,
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 18,
        color: 'green',
        lineHeight: 18,
    }
})

export default ListDetails;