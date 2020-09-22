import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import Screen from './app/components/Screen/Screen';

function OfflineTest(props) {
    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));

            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log(person)
        } catch (e) {
            console.log(e);
        }

    }



    return (
        <Screen>
            <Button title="Hello" onPress={demo}></Button>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default OfflineTest;