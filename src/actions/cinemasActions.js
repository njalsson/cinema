import ApiService from '../services/ApiService'
import * as constants from '../constants';

export const getCinemas = () => {
    return async dispatch => {
        try {
            const cinemas = await ApiService.getCinemas();
            dispatch(getCinemasSuccess(cinemas));
        } catch (err) {
            await ApiService.authenticate();
            try {
                const cinemas = await ApiService.getCinemas();
                dispatch(getCinemasSuccess(cinemas));
            } catch (err) {
                alert(err);
            }
        }
    };
};

const getCinemasSuccess = cinemas => ({
    type: constants.GET_CINEMAS,
    payload: cinemas,
});