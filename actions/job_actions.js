import fakeData from '../fake_data';
import { FETCH_JOBS, LIKE_JOB } from './types';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import axios from 'axios';

//Params for Indeed API
// const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
// const JOB_QUERY_PARAMS = {
//     publisher: '4201738803816157',
//     format: 'json',
//     v: '2',
//     latlong: 1,
//     radius: 10,
//     q: 'javascript'
// };

//Builds URL for Indeed API
// const buildJobsUrl = (zip) => {
//     const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//     return `${JOB_ROOT_URL}${query}`;
// };

//Because the Indeed API stopped giving out test keys to devs, I had to make fake data for now
// export const fetchJobs = (region) = async dispatch => {
//     try {

//         let zip = await reverseGeocode(region);
//         const url = buildJobsUrl(zip);
//         let { data }  = await axios.get('url');
//         dispatch({ type: FETCH_JOBS, payload: data });

//     } catch (error) {
//         console.log(error);
//     }
// };

//Replacement fake data for "job search"
export const fetchJobs = (region, callback) => {
    callback();
    return { type: FETCH_JOBS, payload: fakeData(region) };
};

export const likeJob = (job) => {
    return { type: LIKE_JOB, payload: job };
};