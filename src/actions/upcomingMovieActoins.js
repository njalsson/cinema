import * as constants from '../constants';

export const changeUpcomingMovie = (movie) => ({
    type: constants.CHANGE_UPCOMING_MOVIE,
    payload: movie,
});
