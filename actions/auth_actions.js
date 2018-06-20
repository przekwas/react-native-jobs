import { AsyncStorage } from 'react-native';

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

export const facebookLogin = async () => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        //Dispatch FB Login Success

    } else {
        //Dispatch FB Login Process

    }
};