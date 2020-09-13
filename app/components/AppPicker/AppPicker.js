import React from 'react';
import { useState } from 'react';
import { Modal, FlatList } from 'react-native';
import {
    StyleSheet,
    View,
    TextInput,
    Platform,
    Picker,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../Screen/Screen';

import colors from '../../config/colors';
import defaultStyles from '../../config/styles'
import AppText from '../AppText/AppText';
import PickerItem from '../PickerItem/PickerItem';

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>

                    {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.medium} name={icon} />}

                    { selectedItem ? 
                        (<AppText style={styles.text}>{selectedItem.label}</AppText>)
                        :
                        (<AppText style={styles.placeholder}>{placeholder}</AppText>)
                    }

                    <MaterialCommunityIcons
                        size={20}
                        color={colors.medium}
                        name='chevron-down'
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    }
                />

            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        margin: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})

export default AppPicker;