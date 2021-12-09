import * as constants from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
    case constants.CHANGE_CURR_CINEMA: return action.payload;
    default: return state;
    }
}