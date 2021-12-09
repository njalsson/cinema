import * as constants from '../constants';

export default function (state = {movies: []}, action) {
    switch (action.type) {
    case constants.CHANGE_CURR_MOVIES: return {movies: state.movies, currentMovies: action.payload, currentMovie: state.currentMovie};
    case constants.GET_MOVIES: return {movies: action.payload, currentMovies: state.currentMovies, currentMovie: state.currentMovie};
    case constants.CHANGE_CURR_MOVIE: return {movies: state.movies, currentMovies: state.currentMovies, currentMovie: action.payload};
    default: return state;
    }
}