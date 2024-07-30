import { configureStore } from "@reduxjs/toolkit";
import ReduxSettingSlice from "../slice/ReduxSettingSlice";
import GenarateImageApi from "../api/BaseApi";
import ReduxAuthenticationSlice from "../slice/ReduxAuthenticationSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, ReduxAuthenticationSlice);

export const ReduxStore = configureStore({
  reducer: {
    Setting: ReduxSettingSlice,
    [GenarateImageApi.reducerPath]: GenarateImageApi.reducer,
    LoginApi: ReduxAuthenticationSlice,
    persistedReducer
  },
  middleware: (defaultMiddleWars) => defaultMiddleWars({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(GenarateImageApi.middleware)
});

export const persistor = persistStore(ReduxStore)


export type AppRoot = ReturnType<typeof ReduxStore.getState>;
export type TypeDispatch = typeof ReduxStore.dispatch;

