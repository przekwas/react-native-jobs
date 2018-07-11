import _ from 'lodash';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';
import { REHYDRATE } from 'redux-persist/es/constants';

export default function (state = [], action) {
    switch (action.type) {
        //Gets persisted state from AsyncStorage during redux warmpup actions
        case REHYDRATE:
            //the OR empty array handles first time the app runs
            return action.payload.likedJobs || [];
        case LIKE_JOB:
            // Create new array with other liked jobs, but only add uniquely liked jobs
            // To prevent duplicates
            return _.uniqBy([action.payload, ...state], 'jobkey');
        case CLEAR_LIKED_JOBS:
            return [];
        default:
            return state;
    };
};