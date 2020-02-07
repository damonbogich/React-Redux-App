const initialState = {
    isLoading: false, 
    baller: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_BALLER_START':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCHING_DATA_SUCCESS': 
            return {
                ...state,
                isLoading: false,
                baller: action.payload
            }    
        default: 
        return state;
    }
}