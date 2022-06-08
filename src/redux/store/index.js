/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import searchReducer from "../reducers/searchReducer"
//import mainReducer from "../reducers"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"

const persistConfig = {
  key: "root", // I'm planning to remember the whole redux store
  storage,
  transforms: [
    encryptTransform({
      onError: (error) => {
        console.log(error)
      },
      secretKey: process.env.REACT_APP_PERSIST_SECRET_KEY,
    }),
  ],
}

const combinedReducer = combineReducers({
  favourites: favouritesReducer,
  jobSearch: searchReducer,
})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  // we're going to tell Redux which reducer function to use!
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
// const store = configureStore({
//   //reducer: mainReducer,
//   reducer: combineReducers({
//     favourites: favouritesReducer,
//     jobSearch: searchReducer,
//   }),
//   // we're going to tell Redux which reducer function to use!
// })

const persistor = persistStore(store)

export { store, persistor }

// the final step now is to INJECT the redux store into our component tree
