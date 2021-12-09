import * as constants from '../constants';

export const changeCurrentCinema = (cinema) => ({
    type: constants.CHANGE_CURR_CINEMA,
    payload: cinema,
});
