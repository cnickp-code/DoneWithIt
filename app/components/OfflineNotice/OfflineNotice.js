import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import colors from '../../config/colors';
import AppText from '../AppText/AppText';

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    
    // explicitly check for a false value important
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false) { 
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }

    return null;

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        zIndex: 20,
        width: '100%',
        marginTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
    }
})

export default OfflineNotice;