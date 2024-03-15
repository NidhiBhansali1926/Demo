import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { MMKV } from 'react-native-mmkv';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import auth from './auth';
import { api } from '../services/api';

const reducers = combineReducers({
  auth,
  [api.reducerPath]: api.reducer,
});

// const storage = new MMKV();

// export const reduxStorage: Storage = {
//   setItem: (key, value) => {
//     storage.set(key, value);
//     return Promise.resolve(true);
//   },
//   getItem: (key) => {
//     const value = storage.getString(key);
//     return Promise.resolve(value);
//   },
//   removeItem: (key) => {
//     storage.delete(key);
//     return Promise.resolve();
//   },
// };

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
