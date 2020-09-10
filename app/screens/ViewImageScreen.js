import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='close' size={35} color='white' style={styles.closeIcon} />
            <MaterialCommunityIcons name='trash-can-outline' size={35} color='white' style={styles.deleteIcon} />
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    closeIcon: {
      position: 'absolute',
      top: 40,
      left: 30,  
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,  
    }
})

export default ViewImageScreen;