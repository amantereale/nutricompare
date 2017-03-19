import {combineReducers} from 'redux';
import QuickSearchReducer from './quickSearchReducer';
import TabSelectReducer from './tabSelectReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    quickSearchNutrition: QuickSearchReducer,
    selectedTab: TabSelectReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
