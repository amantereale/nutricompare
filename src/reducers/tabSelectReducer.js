import {SELECT_TAB} from '../actions/index';

export default function(state = {id: 1}, action) {
    switch (action.type) {
        case SELECT_TAB:
            return {
                id: action.payload
            };
    }

    return state;
}
