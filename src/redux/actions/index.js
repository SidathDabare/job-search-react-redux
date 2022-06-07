/** @format */

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
// export const SET_USERNAME = "SET_USERNAME"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"

// export const addToFavouritestAction = (jobAdd) => {
//   return {
//     type: ADD_TO_FAVOURITES, // this is mandatory
//     payload: jobAdd, // this is not a mandatory property for every action
//     // but our reducer needs this book in order to fill the cart correctly!
//   }
// }

export const removeFromFavouritesAction = (indexToRemove) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: indexToRemove,
  }
}
// export const setUsernameAction = (newName) => {
//   return {
//     type: SET_USERNAME,
//     payload: newName,
//   }
// }

export const addToCartActionWithThunk = (jobAdd) => {
  return async (dispatch, getState) => {
    console.log("I'm dispatching this from a function!")
    // I can do whatever I want here...

    dispatch({
      type: ADD_TO_FAVOURITES, // this is mandatory
      payload: jobAdd, // this is not a mandatory property for every action
    })
  }
}
export const jobsLoading = () => {
  return {
    type: GET_JOBS_LOADING,
  }
}

export const getJobsAction = (url) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + url
      )
      if (response.ok) {
        let jobs = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: jobs.data,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      } else {
        console.log("error")
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
      })
      dispatch({
        type: GET_JOBS_LOADING,
      })
    }
  }
}
