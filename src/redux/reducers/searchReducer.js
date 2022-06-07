/** @format */

import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions"

const initialState = {
  jobs: [],
  error: false,
  loading: false,
}

const jobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
      }
    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default jobSearchReducer
