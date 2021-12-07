import SearchTypes from './search.types';

export const setSearchKey = (keyword) => ({
    type: SearchTypes.SEARCH_KEYWORD,
    payload: keyword
});