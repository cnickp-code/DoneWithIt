import React from 'react';
import { 
    StyleSheet,
    View,
    TextInput,
    Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import defaultStyles from '../../config/styles'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.medium} name={icon} />}
            <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                style={styles.textInput}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10
    },
    icon: {
        margin: 10,
    },  
    textInput: {
        ...defaultStyles.text,
        flex: 1
    }
})

export default AppTextInput;