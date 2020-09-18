import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon 
                    name={item.icon.name}
                    size={item.icon.size}
                    backgroundColor={item.icon.backgroundColor}
                />
                
            </View>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: 120,
        textAlign: 'center',
        marginTop: 5,
    }
})

export default PickerItem;