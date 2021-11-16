import ShopTypes from './shop.types.js';

export const setIsShopping = (isShopping) => ({
    type: ShopTypes.IS_SHOPPING,
    payload: isShopping
});
