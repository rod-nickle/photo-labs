import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  REMOVE_PHOTO_DATA: 'REMOVE_PHOTO_DATA',
}

function reducer(state, action) {
  
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      // Add Photo to Favourites List.
      const newState = { ...state };
      let favouritePhotos;
      favouritePhotos = [ ...state.favouritePhotos, action.value]; 
      newState.favouritePhotos = [...favouritePhotos];
      return newState
    }
 
    case ACTIONS.FAV_PHOTO_REMOVED: {
      // Remove Photo from Favourites List.
      const newState = { ...state };
      let favouritePhotos;
      if (Array.isArray(newState.favouritePhotos) && state.favouritePhotos.includes(action.value)) {
        favouritePhotos = newState.favouritePhotos.filter((x) => x !== action.value);
      }
      newState.favouritePhotos = [...favouritePhotos];
      return newState;
    }
    
    case ACTIONS.SET_PHOTO_DATA: {
      const newState = { ...state };
      newState.photoSelected = true;
      newState.selectedPhoto = action.value;
      return newState;
    }
    
    case ACTIONS.REMOVE_PHOTO_DATA: {
      const newState = { ...state };
      newState.photoSelected = false;
      newState.selectedPhoto = {};
      return newState;
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


/**
 * const state = {
 * favouritePhotos: {},
 * photoSelected: false,
 * photoDetails: {},
 * }
 * @returns 
 */
const useApplicationData = (defaultState) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return {state, dispatch};
};

export default useApplicationData;