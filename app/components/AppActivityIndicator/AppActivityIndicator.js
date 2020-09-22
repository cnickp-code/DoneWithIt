import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function AppActivityIndicator({ visible = false}) {
    if(!visible) { 
        return null;
    }

    return (
        <View style={styles.overlay}>
            <LottieView 
                autoPlay
                loop
                imageAssetsFolder={'lottie'}
                source={require('../../../android/app/src/main/assets/lottie/loading2/loading2.json')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        zIndex: 10,
        opacity: 0.8,
    }
})

export default AppActivityIndicator;