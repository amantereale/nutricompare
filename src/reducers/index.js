import {combineReducers} from 'redux';
import QuickSearchReducer from './quickSearchReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    quickSearchNutrition: QuickSearchReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
