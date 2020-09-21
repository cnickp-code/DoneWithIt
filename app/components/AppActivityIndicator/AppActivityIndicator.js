import React from 'react';
import LottieView from 'lottie-react-native';

function AppActivityIndicator({ visible = false}) {
    if(!visible) { 
        return null;
    }

    return (
        <LottieView 
            autoPlay
            loop
            imageAssetsFolder={'lottie'}
            source={require('../../../android/app/src/main/assets/lottie/loading2.json')} 
        />
    );
}

export default AppActivityIndicator;