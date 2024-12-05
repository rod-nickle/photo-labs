import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import { ACTIONS } from 'hooks/useApplicationData';

/**
 * Favourites Badge Component
 * @param {*} isFavPhotoExist 
 * @returns JSX element
 */
const FavBadge = (props) => {
  const { dispatch, isFavPhotoExist, isPhotosFilteredByFavourite } = props;
  let dispatchType = ACTIONS.FILTER_FAVOURITE_PHOTOS;

  return (
    <div className='fav-badge' onClick={() => dispatch({ type: dispatchType })} >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} isPhotosFilteredByFavourite={!!isPhotosFilteredByFavourite}/>
    </div>
  ) 
};

export default FavBadge;  