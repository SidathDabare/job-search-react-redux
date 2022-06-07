/** @format */

import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

const initialState = {
  content: [], // the value of content will be our array of books in the cart!
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    // the book is getting passed with action.payload
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.content, action.payload], // this works
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((company, i) => i !== action.payload),
      }
    default:
      return state
  }
}

export default favouritesReducer
