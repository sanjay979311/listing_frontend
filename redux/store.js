

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
// import { api } from "./services/api";          // base RTK Query api

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [api.reducerPath]: api.reducer,           // handles all injected endpoints
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { api } from "./services/api";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // persist only auth
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store setup
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(api.middleware),
});

// Persistor
export const persistor = persistStore(store);
