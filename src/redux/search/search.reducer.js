import SearchTypes from './search.types';

const DEFAULT_STATE = {
    searchKey: ''
}

const searchReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SearchTypes.SEARCH_KEYWORD:
            return ({
                ...state,
                searchKey: action.payload
            });
        default:
            return state;
    }
}

export default searchReducer;