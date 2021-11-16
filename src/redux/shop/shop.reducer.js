import ShopTypes from './shop.types';

const DEFAULT_STATE = {
    isShopping: false
}

const shopReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ShopTypes.IS_SHOPPING:
            return {
                ...state,
                isShopping: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;