import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton/AppButton';
import colors from '../config/colors';
import { NavigationContainer } from '@react-navigation/native';

function WelcomeScreen({ navigation }) {

    const handlePress = () => {
        console.log('Tapped');
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
            blurRadius={1}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>

            <AppButton title={'Login'} color={colors.primary} onPress={() => navigation.navigate('Login')}/>
            <AppButton title={'Register'} color={colors.secondary} onPress={() => navigation.navigate('Register')}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;

