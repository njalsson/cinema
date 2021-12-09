import ApiService from '../services/ApiService';
import * as constants from '../constants';

export const getMovies = () => {
    return async dispatch => {
        try {
            const cinemas = await ApiService.getMovies();
            dispatch(getMoviesSuccess(cinemas));
        } catch (err) {
            await ApiService.authenticate();
            try {
                const cinemas = await ApiService.getMovies();
                dispatch(getMoviesSuccess(cinemas));
            } catch (err) {
                alert(err);
            }
        }
    };
};

export const changeCurrentMovie = movie => ({
    type: constants.CHANGE_CURR_MOVIE,
    payload: movie,
});

export const changeCurrentMovies = (movies) => ({
    type: constants.CHANGE_CURR_MOVIES,
    payload: movies,
});

const getMoviesSuccess = cinemas => ({
    type: constants.GET_MOVIES,
    payload: cinemas,
});