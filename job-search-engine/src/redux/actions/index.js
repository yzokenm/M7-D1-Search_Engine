
// *********** ACTION CREATORS ******************

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS"
export const SET_ERROR = "SET_ERROR"
export const GET_JOB_OFFERS = "GET_JOB_OFFERS"
export const GET_JOB_OFFERS_ERROR = "GET_JOB_OFFERS_ERROR"
export const GET_INPUT_VALUE = "GET_INPUT_VALUE"
export const GET_LIMIT = "GET_LIMIT"
export const GET_LOADING_SPINNER = "GET_LOADING_SPINNER"

export const addToFavoritesWithThunk =(favJob)=> {
    return async(dispatch, getState)=> {
        console.log("Here is my getstate:", getState());
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: favJob
        })
    }
        
}


export const removeFromFavsWithThunk =(index)=> {
    return (dispatch)=> {
        dispatch({
            type: REMOVE_FROM_FAVS,
            payload: index

        })
    }
}

export const getAlljobOffers =(inputValue)=> {
    return async(dispatch)=> {
        try {
            let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${inputValue}&limit=20`);
            if (response.ok) {
                console.log("Response:", response);
              let jobs = await response.json();
              console.log("JobsL:", jobs);
              dispatch({
                  type: GET_JOB_OFFERS,
                  payload:jobs
              })
              dispatch({
                  type:GET_LOADING_SPINNER,
                  payload:false
              })
            }else{
                dispatch({
                    type: GET_JOB_OFFERS_ERROR,
                    payload: response.status
                })
            }
          } catch (error) {
            console.log(error);
          }
        };
    }
  