import React from 'react';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, StyleSheet, Button, Image } from 'react-native';

import Screen from './app/components/Screen/Screen';


function Test(props) {
    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!granted)
            alert('You need to enable permission to access the library.')
    }

    useEffect(() => {
        requestPermission();
        // cannot return a function that returns a promise. 
        // must be put into a separate function.
    }, [])

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if(!result.cancelled) {
                setImageUri(result.uri)
            }
        } catch(e) {
            console.log('Error reading an image', e);
        }
    }

    return (
        <Screen>
            <Button title="Select Image" onPress={selectImage} />
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Test;