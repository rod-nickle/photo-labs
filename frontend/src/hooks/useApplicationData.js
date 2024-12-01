import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DESELECT_PHOTO: 'DELECT_PHOTO',
}

function reducer(state, action) {
  
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      // Add Photo to Favourites List if not already there.
      if (Array.isArray(state.favouritePhotos) && state.favouritePhotos.includes(action.value)) {
        return { ...state };
      } else {
        return { ...state, favouritePhotos: [...state.favouritePhotos, action.value] };
      }
    }
       
    case ACTIONS.FAV_PHOTO_REMOVED: {
      // Remove Photo from Favourites List.
      return { ...state, favouritePhotos: state.favouritePhotos.filter((x) => x !== action.value) };
    }
    
    case ACTIONS.SELECT_PHOTO: {
      // Set the Photo data for the Modal.
      return { ...state, photoSelected: true, selectedPhoto: action.value };
    }
    
    case ACTIONS.DESELECT_PHOTO: {
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
 * 
 * @param {structure} defaultState 
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