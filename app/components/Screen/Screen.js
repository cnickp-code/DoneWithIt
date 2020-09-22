import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View } from 'react-native';

function Screen(props) {
    return (
        <SafeAreaView style={{...styles.screen, ...props.style}}>
            <View style={{...props.style, ...styles.view}}>{props.children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        position: 'relative',
        flex: 1
    },
    view: {
        flex: 1
    }
})

export default Screen;