import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/**
 * Favourites Badge Component
 * @param {*} isFavPhotoExist 
 * @returns JSX element
 */
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge; 