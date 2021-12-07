import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectIsShopping = createSelector(
    [selectShop],
    shop => shop.isShopping 
);

export const selectCategories = createSelector(
    [selectShop],
    shop => shop.categories
);

export const selectProducts = createSelector(
    [selectShop],
    shop => shop.products
);

export const selectIsProductsLoading = createSelector(
    [selectShop],
    shop => shop.isProductsLoading
);

export const selectIsCategoriesLoading = createSelector(
    [selectShop],
    shop => shop.isCategoriesLoading
);

export const selectFilters = createSelector(
    [selectShop],
    shop => shop.filters
);