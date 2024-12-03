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
  const { dispatch, isFavPhotoExist } = props;
  let dispatchType = ACTIONS.FILTER_FAVOURITE_PHOTOS;

  return (
    <div className='fav-badge' onClick={() => dispatch({ type: dispatchType })} >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;  