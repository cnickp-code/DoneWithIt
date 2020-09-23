import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        // Maybe you want to do something different when getting a certain notification
        // Notifications.addListener(notification => {
        //     navigation.navigate('Account');
        // });

        if(notificationListener) {
            Notifications.addListener(notificationListener);
        }
        
    }, [])

    const registerForPushNotifications = async () => {
        try {  
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    
            if(!permission.granted) { // This always returns false in Android/IOS simulator
                return;
            }
    
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
            
        } catch (error) {
            console.log('Error getting a push token.', error);
        }
    }
}