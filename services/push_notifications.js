import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushToken');
    console.log(previousToken);
    if (previousToken) {
        //case if token already exsists 
        return;
    } else {
        //case if we need to ask for permission to send push notifications
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (status !== 'granted') {
            //case if they said no
            return;
        }

        //generate and save token to backend server and AsyncStorage
        let token = await Notifications.getExpoPushTokenAsync();
        await axios.post(PUSH_ENDPOINT, { token: { token } });
        AsyncStorage.setItem('pushToken', token);

    }
};