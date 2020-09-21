import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { (progress < 1) 
                    ? <Progress.Bar progress={progress} color={colors.primary} width={200} />
                    : <LottieView 
                        autoPlay 
                        loop={false} 
                        imageAssetsFolder={'lottie'} 
                        source={require('../../android/app/src/main/assets/lottie/check/check.json')}  

                        onAnimationFinish={onDone}
                        />
                }
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default UploadScreen;