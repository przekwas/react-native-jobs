import _ from 'lodash';
import { LIKE_JOB } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            // Create new array with other liked jobs, but only add uniquely liked jobs
            // To prevent duplicates
            return _.uniqBy([ action.payload, ...state ], 'jobkey');
        default:
            return state;
    };
};