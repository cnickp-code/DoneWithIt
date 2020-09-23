import { Notifications } from 'expo';
import React from 'react';
import { Button } from 'react-native';
import Screen from './app/components/Screen/Screen';

function NotificationsTest(props) {
    const showNotification = () => {
        // Notifications.presentLocalNotificationAsync({
        //     title: 'Congratulations', 
        //     body: 'Your order was successfully placed!',
        //     data: {
        //         _displayInForeground: true
        //     }
        // })

        Notifications.scheduleLocalNotificationAsync({
                title: 'Congratulations', 
                body: 'Your order was successfully placed!',
                data: {
                    _displayInForeground: true
                }
                
        }, { time: new Date().getTime() + 2000 })
    }

    return (
        <Screen>
            <Button title="Tap me" onPress={showNotification} />
        </Screen>
    );
}

export default NotificationsTest;