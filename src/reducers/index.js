import { combineReducers } from "redux";
import cinemas from './cinemasReducer';
import cinema from './cinemaReducer';
import movies from './moviesReducer';
import upcoming from './upcomingReducer';
import upcomingMovie from "./upcomingMovieReducer";

export default combineReducers({
    cinemas,
    cinema,
    movies,
    upcoming,
    upcomingMovie,
});