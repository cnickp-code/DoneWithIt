import { Notifications } from 'expo';
import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native';
import messagesApi from '../../api/messages';

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if(!result.ok) {
            console.log('Error', result);
            return Alert.alert('Error', "Could not send the message");
        }

        resetForm();

        Notifications.presentLocalNotificationAsync({
            title: 'Awesome!',
            body: 'Your message was sent to the seller.',
        });
    }
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default ContactSellerForm;