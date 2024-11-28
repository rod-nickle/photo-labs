import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoId, favouritePhotos, toggleFavouritePhoto } = props;
  let selected = false;

  if (favouritePhotos && favouritePhotos[photoId]) {
    selected = true;
  } 

  const handleClick = () => {
    toggleFavouritePhoto(photoId);
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