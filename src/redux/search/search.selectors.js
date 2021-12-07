import { createSelector } from 'reselect';

const selectSearch = store => store.search;

export const selectSearchKeyword = createSelector(
    [selectSearch],
    search => search.searchKey
);