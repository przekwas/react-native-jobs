import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushToken');
    if (previousToken) {
        //case if token already exsists 
        return;
    } else {
        //case if we need to ask for permission to send push notifications
        let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if (status !== 'granted') {
            //case if they said no
            return;
        }


        let token = await Notifications.getExpoPushTokenAsync();
        

    }
};