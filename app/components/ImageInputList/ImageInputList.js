import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from '../ImageInput/ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef(); // USE REF TO REFER TO COMPONENT AND CALL ITS METHOD PROPS

    return (
        <View>
            <ScrollView  // FILLS AVAILABLE SPACE. MUST CHANGE. WRAP INSIDE OF A VIEW.
                horizontal={true}
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri =>
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    }
})

export default ImageInputList;