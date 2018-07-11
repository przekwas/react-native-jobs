import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import likesReducer from './likesReducer';  

const config = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['likedJobs']
};

export default persistCombineReducers(config, {
    auth: authReducer,
    jobs: jobsReducer,
    likedJobs: likesReducer
});