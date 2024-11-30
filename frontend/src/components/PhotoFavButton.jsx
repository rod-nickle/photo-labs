import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoId, favouritePhotos, updateToFavPhotoIds } = props;
  let selected = false;

  if (Array.isArray(favouritePhotos) && favouritePhotos.indexOf(photoId) >= 0) {
    selected = true;
  } 

  const handleClick = () => {
    updateToFavPhotoIds(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;