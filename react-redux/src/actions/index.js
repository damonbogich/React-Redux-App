import axios from "axios"

export const fetchBaller = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_BALLER_START'});
        axios.get('https://www.balldontlie.io/api/v1/players')
        .then(res => {
            console.log(res);
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload: res.data.data[0]})

        })
        .catch(err => console.log(err))
    };
};