import { createStore } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import _reducer from "./reducer/index";
import _enhancer from "./enhancers";

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, _reducer);

const store = createStore(persistedReducer,_enhancer);

const persistor = persistStore(store);

export { store, persistor }