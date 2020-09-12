import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

function MenuItem(props) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
        >
            <View style={styles.container}>
                <View style={{...styles.iconContainer, backgroundColor: props.backgroundColor }}>
                    <MaterialCommunityIcons 
                        name={props.icon}
                        size={20}
                        color={colors.white}
                    />
                </View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 36,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    title: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    }

})

export default MenuItem;