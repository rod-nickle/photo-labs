import { useReducer } from "react";

// Actions for our Reducer.
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DESELECT_PHOTO: 'DELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
}

/**
 * Reducer for our Custom Hook. Sets the state based on various actions throughout our App.
 * @param {object} state Global state
 * @param {object} action Object to pass data into the reducer. 
 * @returns {object} The new global state
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
      // Fetch Photo data from the database.
      return { ...state, photoData: action.payload };
    }

    case ACTIONS.SET_TOPIC_DATA: {
      // Fetch Topic data from the database.
      return { ...state, topicData: action.payload };
    }

    case ACTIONS.GET_PHOTOS_BY_TOPICS: {
      // Fetch Photo by Topic from the database.
      return { ...state, selectedTopicId: action.topicId };
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};



/**
 * 
 * @param {object} initialState 
 * {
 * favouritePhotos: Array,
 * isPhotoSelected: Boolean,
 * selectedPhoto: {},
 * selectedTopicId: null,
 * photoData: [],
 * topicData: [],
 * }
 * @returns {} The Global state and Dispatch function to set the state.
 */
const useApplicationData = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {state, dispatch};
};

export default useApplicationData;