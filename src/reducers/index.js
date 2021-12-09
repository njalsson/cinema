import { combineReducers } from "redux";
import cinemas from './cinemasReducer';
import cinema from './cinemaReducer';

export default combineReducers({
    cinemas,
    cinema,
});