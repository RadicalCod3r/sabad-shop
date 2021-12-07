import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import searchReducer from './search/search.reducer';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    shop: shopReducer,
    user: userReducer,
    search: searchReducer
});

export default rootReducer;