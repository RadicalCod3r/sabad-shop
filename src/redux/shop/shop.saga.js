import { collection, getDocs } from 'firebase/firestore';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { addDocumentItemsToProducts, convertProductsSnapshotToMap, db, addCategoryAndItems, convertCategoriesSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCategoriesFailure, fetchCategoriesSuccess, fetchProductsFailure, fetchProductsSuccess } from './shop.action';
import ShopTypes from './shop.types';
import products from '../../data/products';
import categories from '../../data/categories';
import { convertCategoryMapToArray } from './shop.utils';

// Async Generators
export function* fetchProductsStartAsync() {
    try {
        yield addDocumentItemsToProducts(products);
        const productsRef = yield collection(db, 'products');
        const productsSnapshot = yield getDocs(productsRef);
        const productsArr = yield call(convertProductsSnapshotToMap, productsSnapshot); 
        yield put(fetchProductsSuccess(productsArr));
    } catch(error) {
        yield put(fetchProductsFailure(error));
    }
}

export function* fetchCategoriesStartAsync() {
    try {
        const categoryArr = yield call(convertCategoryMapToArray, categories);
        yield categoryArr.forEach((category) => {
            addCategoryAndItems(category.name, category);
        });
        const categoriesRef = yield collection(db, 'categories');
        const categoriesSnapshot = yield getDocs(categoriesRef);
        yield console.log(categoriesSnapshot);
        const categoryMap = yield call(convertCategoriesSnapshotToMap, categoriesSnapshot);
        yield put(fetchCategoriesSuccess(categoryMap));
    } catch(error) {
        yield put(fetchCategoriesFailure(error));
    }
}

// Sagas
export function* onFetchProductsStart() {
    yield takeLatest(
        ShopTypes.FETCH_PRODUCTS_START,
        fetchProductsStartAsync
    )
}

export function* onFetchCategoriesStart() {
    yield takeLatest(
        ShopTypes.FETCH_CATEGORIES_START,
        fetchCategoriesStartAsync
    )
}

export function* shopSagas() {
    yield all([
        call(onFetchCategoriesStart),
        call(onFetchProductsStart)
    ]);
}