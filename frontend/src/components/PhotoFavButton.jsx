import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { ACTIONS } from 'hooks/useApplicationData';

function PhotoFavButton(props) {
  const { dispatch, photoId, favouritePhotos } = props;
  let selected = false;
  let dispatchType = ACTIONS.FAV_PHOTO_ADDED;

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