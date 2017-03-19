import {FETCH_QUICKSEARCH_NUTRITION} from '../actions/index';

export default function(state = {nutritionData: []}, action) {
    switch (action.type) {
        case FETCH_QUICKSEARCH_NUTRITION:
            return {
                ...state,
                nutritionData: [...state.nutritionData, action.payload.data]
            };
    }

    return state;
}
