import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './root-saga';
import { persistStore } from 'redux-persist';

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [sagaMiddleWare];

if(process.env.NODE_ENV !== 'production') {
    middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

// const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export default store;