import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  REMOVE_PHOTO_DATA: 'REMOVE_PHOTO_DATA',
}

function reducer(state, action) {
  
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      // Add Photo to Favourites List if not already there.
      if (!state.favouritePhotos.includes(action.value)) {
        return { ...state, favouritePhotos: [...state.favouritePhotos, action.value] };
      }
    }
       
    case ACTIONS.FAV_PHOTO_REMOVED: {
      // Remove Photo from Favourites List.
      return { ...state, favouritePhotos: state.favouritePhotos.filter((x) => x !== action.value) };
    }
    
    case ACTIONS.SET_PHOTO_DATA: {
      // Set the Photo data for the Modal.
      return { ...state, photoSelected: true, selectedPhoto: action.value };
    }
    
    case ACTIONS.REMOVE_PHOTO_DATA: {
      // Remove the Photo data from the Modal.
      return { ...state, photoSelected: false, selectedPhoto: {} };
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