/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import searchReducer from "../reducers/searchReducer"
//import mainReducer from "../reducers"

const store = configureStore({
  //reducer: mainReducer,
  reducer: combineReducers({
    favourites: favouritesReducer,
    jobSearch: searchReducer,
  }),
  // we're going to tell Redux which reducer function to use!
})

export default store

// the final step now is to INJECT the redux store into our component tree
