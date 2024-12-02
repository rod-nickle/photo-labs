import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { ACTIONS } from 'hooks/useApplicationData';

/**
 * Favourite Button Component
 * @param {*} props 
 * @returns JSX Element
 */
function PhotoFavButton(props) {
  const { dispatch, photoId, favouritePhotos } = props;
  let selected = false;
  let dispatchType = ACTIONS.FAV_PHOTO_ADDED;

  // If this photo is already favourited, then change the icon and Dispatch Type.
  if (Array.isArray(favouritePhotos) && favouritePhotos.includes(photoId)) {
    selected = true;
    dispatchType = ACTIONS.FAV_PHOTO_REMOVED;
  } 

  return (
    <div className="photo-list__fav-icon" onClick={() => dispatch({ type: dispatchType, photoId: photoId })} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;