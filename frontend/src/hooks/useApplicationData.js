import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DESELECT_PHOTO: 'DELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function reducer(state, action) {
  
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      // Add Photo to Favourites List if not already there.
      if (Array.isArray(state.favouritePhotos) && state.favouritePhotos.includes(action.photoId)) {
        return { ...state };
      } else {
        return { ...state, favouritePhotos: [...state.favouritePhotos, action.photoId] };
      }
    }
       
    case ACTIONS.FAV_PHOTO_REMOVED: {
      // Remove Photo from Favourites List.
      return { ...state, favouritePhotos: state.favouritePhotos.filter((x) => x !== action.photoId) };
    }
    
    case ACTIONS.SELECT_PHOTO: {
      // Set the Photo data for the Modal.
      return { ...state, isPhotoSelected: true, selectedPhoto: action.photo };
    }
    
    case ACTIONS.DESELECT_PHOTO: {
      // Remove the Photo data from the Modal.
      return { ...state, isPhotoSelected: false, selectedPhoto: {} };
    }

    case ACTIONS.SET_PHOTO_DATA: {
      return { ...state, photoData: action.payload }
    }

  case ACTIONS.SET_TOPIC_DATA: {
      return { ...state, topicData: action.payload }
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};



/**
 * 
 * @param {structure} initialState 
 * {
 * favouritePhotos: Array,
 * isPhotoSelected: Boolean,
 * photoDetails: Object,
 * }
 * @returns 
 */
const useApplicationData = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {state, dispatch};
};

export default useApplicationData;