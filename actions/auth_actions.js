import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {

    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        //Dispatch FB Login Success
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        //Dispatch FB Login Process
        doFacebookLogin(dispatch);
    }

};

//Helper function to work with the FB modal and token
const doFacebookLogin = async dispatch => {

    let { type, token } = await Facebook.logInWithReadPermissionsAsync('520265995042817', {
        permissions: ['public_profile']
    });

    //FB login failure
    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL, payload: 'Login failed!' })
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

};