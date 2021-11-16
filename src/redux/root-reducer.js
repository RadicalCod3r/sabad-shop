import shopReducer from './shop/shop.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;