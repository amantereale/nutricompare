import axios from 'axios';
import {API_KEY} from '../api-key';
import { showLoading } from 'react-redux-loading-bar';
import {store} from '../index';

export const FETCH_QUICKSEARCH_NUTRITION = 'FETCH_NUTRITION';

const REPORT_URL = `https://api.nal.usda.gov/ndb/reports/?type=b&format=json&api_key=${API_KEY}`;
const FOOD_SEARCH_URL = ``

export function fetchQuickSearchNutrition(ndbno) {
    store.dispatch(showLoading());

    const request = axios.get(`${REPORT_URL}&ndbno=${ndbno}`);

    return {
        type: FETCH_QUICKSEARCH_NUTRITION,
        payload: request
    };
}
