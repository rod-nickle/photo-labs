import { useState } from "react";

/*
const state = {
  favouritePhotos: {},
  photoSelected: false,
  photoDetails: {},
  }
  */

/**
 * const state = {
 *  favouritePhotos: [1, 2],
 *  photoSelected: true,
 *  selectedPhoto: {
 *    "id": "1",
 *    "location": {
 *      "city": "Montreal",
 *      "country": "Canada"
 *    },
 *    "urls": {
 *      "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
 *      "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
 *    },
 *    "user": {
 *      "id": "1",
 *      "username": "exampleuser",
 *      "name": "Joe Example",
 *      "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
 *    },
 *    similar_photos: {
 *      {photoObject1},
 *      {photoObject2},
 *    },
 *  },
 * }
 * @returns 
 */
const useApplicationData = (defaultState) => {
  const [state, setState] = useState(defaultState);

  // can be used to set the favourite photos.
  const updateToFavPhotoIds = (photoId) => {
    const newState = { ...state };
    let favouritePhotos;
    
    if (Array.isArray(newState.favouritePhotos) && newState.favouritePhotos.indexOf(photoId) >= 0) {
      // Remove Photo from Favourites List.
      favouritePhotos = newState.favouritePhotos.filter((x) => x !== photoId);
    } else {
      // Add Photo to Favourites List.
      favouritePhotos = [ ...state.favouritePhotos, photoId];
    }

    newState.favouritePhotos = [...favouritePhotos];
    setState(newState);
  };


  // can be used when the user selects a photo.
  const setPhotoSelected = (photo) => {
    const newState = { ...state };
    newState.photoSelected = true;
    newState.selectedPhoto = photo;
    setState(newState);
  };

  
  // can be used to close the modal.
  const onClosePhotoDetailsModal = () => {
    const newState = { ...state };
    newState.photoSelected = false;
    newState.selectedPhoto = {};
    setState(newState);
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;