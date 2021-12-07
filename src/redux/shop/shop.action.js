import ShopTypes from './shop.types.js';

export const setIsShopping = (isShopping) => ({
    type: ShopTypes.IS_SHOPPING,
    payload: isShopping
});

export const fetchCategoriesStart = () => ({
    type: ShopTypes.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = (categories) => ({
    type: ShopTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories
});

export const fetchCategoriesFailure = (error) => ({
    type: ShopTypes.FETCH_CATEGORIES_FAILURE,
    payload: error
});

export const fetchProductsStart = () => ({
    type: ShopTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products) => ({
    type: ShopTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: ShopTypes.FETCH_PRODUCTS_FAILURE,
    payload: error
});

export const sendFilters = (filters) => ({
    type: ShopTypes.SEND_FILTERS,
    payload: filters
});