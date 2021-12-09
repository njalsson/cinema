import ApiService from '../services/ApiService';
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

const getCinemasSuccess = cinemas => {
    cinemas.sort(compare);
    return {
        type: constants.GET_CINEMAS,
        payload: cinemas,
    };};

function compare( a, b ) {
    const aname = a.name.toLowerCase();
    const bname = b.name.toLowerCase();
    if ( aname < bname ){
        return -1;
    }
    if ( aname > bname ){
        return 1;
    }
    return 0;
}