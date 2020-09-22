import { AsyncStorage } from 'react-native';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch(e) {
        console.log(e);
    }
}

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    const diff = now.diff(storedTime, 'minutes');
    return diff > expiryInMinutes;
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);

        if(!item) {
            return null;
        }

        // Expired time, call to function
        if(isExpired(item)) {
            // Command Query Separation (CQS) violation. Consciously breaking this.
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value;

    } catch(e) {
        console.log(e);
    }
}

export default {
    store,
    get
}