import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem/ListItem';

import colors from '../config/colors';

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
            <ListItem 
                image={props.image}
                title={props.title}
                description={props.description}
            />
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
        marginBottom: 50,
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
        color: colors.secondary,
        lineHeight: 18,
    }
})

export default ListDetails;