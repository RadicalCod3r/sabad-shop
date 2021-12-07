import ShopTypes from './shop.types';
import PRODUCTS_DATA from '../../data/products';
import CATEGORIES_DATA from '../../data/categories';

const DEFAULT_STATE = {
    isShopping: false,
    categories: CATEGORIES_DATA,
    products: PRODUCTS_DATA,
    error: null,
    isProductsLoading: true,
    isCategoriesLoading: true,
    filters: []
}

const shopReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ShopTypes.IS_SHOPPING:
            return {
                ...state,
                isShopping: action.payload
            }
        case ShopTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                error: null,
                isProductsLoading: true
            }
        case ShopTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isProductsLoading: false,
                error: null
            }
        case ShopTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload,
                isProductsLoading: false
            }
        case ShopTypes.FETCH_CATEGORIES_START:
            return {
                ...state,
                error: null,
                isCategoriesLoading: true
            }
        case ShopTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isCategoriesLoading: false,
                error: null
            }
        case ShopTypes.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                categories: [],
                error: action.payload,
                isCategoriesLoading: false
            }
        case ShopTypes.SEND_FILTERS:
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;