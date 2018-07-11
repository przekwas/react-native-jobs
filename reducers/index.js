import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import likesReducer from './likesReducer';  

//config required for redux-persist v5
const config = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['likedJobs']
};

//new combine reducers function for redux-persist with the config options
export default persistCombineReducers(config, {
    auth: authReducer,
    jobs: jobsReducer,
    likedJobs: likesReducer
});