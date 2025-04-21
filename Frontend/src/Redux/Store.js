import { configureStore,combineReducers } from '@reduxjs/toolkit'



import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage';
// slice file importing
import AdminLoginSlice from './AdminLoginSlice';
import UserLoginSlice from './UserLoginSlice'


const persistConfig = {
  key: 'logindata',
  version: 1,
  storage,
}

// slice file combine to reducers
const Rootreducer = combineReducers({
  AdminLogin: AdminLoginSlice,
  UserLogin:UserLoginSlice
})

const persistedReducer = persistReducer(persistConfig,Rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)