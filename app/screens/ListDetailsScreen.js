import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem/ListItem';

import colors from '../config/colors';

function ListDetails(props) {
    const listing = props.route.params;

    return (
        <View style={styles.container}>
            <Image 
                resizeMode='cover'
                style={styles.img}
                source={{ uri: listing.images[0].url }}
            />
            <View style={styles.inner}>
                <Text style={styles.title}>
                    {listing.title}
                </Text>
                <Text style={styles.subTitle}>
                    ${listing.price}
                </Text>
            </View>
            <ListItem 
                image={require('../assets/mosh.jpg')}
                title={"Mosh Hamedani"}
                description={"5 Listings"}
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