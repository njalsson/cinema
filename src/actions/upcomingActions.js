import ApiService from '../services/ApiService';
import * as constants from '../constants';

export const getUpcoming = () => {
    return async dispatch => {
        try {
            const upcoming = await ApiService.getUpcoming();
            dispatch(getUpcomingSuccess(upcoming));
        } catch (err) {
            await ApiService.authenticate();
            try {
                const upcoming = await ApiService.getUpcoming();
                dispatch(getUpcomingSuccess(upcoming));
            } catch (err) {
                alert(err);
            }
        }
    };
};

const getUpcomingSuccess = upcoming => {
    upcoming.sort(compare);
    return {
        type: constants.GET_UPCOMING,
        payload: upcoming,
    };};

function compare( a, b ) {
    const aname = a["release-dateIS"].toLowerCase();
    const bname = b["release-dateIS"].toLowerCase();
    if ( aname < bname ){
        return -1;
    }
    if ( aname > bname ){
        return 1;
    }
    return 0;
}