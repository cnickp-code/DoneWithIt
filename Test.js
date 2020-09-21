import React from 'react';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, StyleSheet, Button, Image } from 'react-native';

import Screen from './app/components/Screen/Screen';
import ImageInput from './app/components/ImageInput/ImageInput';
import ImageInputList from './app/components/ImageInputList/ImageInputList';


function Test(props) {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri]);
    }

    const handleRemove = (uri) => {
        const newUris = imageUris.filter(imageUri => imageUri !== uri);

        setImageUris(newUris);
    }

    return (
        <Screen>
            <ImageInputList 
                imageUris={imageUris} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Test;