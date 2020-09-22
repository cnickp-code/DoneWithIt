import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors'

function AppButton(props) {
    return (
        <TouchableOpacity 
            style={{...styles.button, backgroundColor: props.color}}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        fontFamily: 'Roboto',
        width: '100%',
        height: 60,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        // elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;