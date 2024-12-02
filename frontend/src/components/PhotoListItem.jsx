import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import { ACTIONS } from 'hooks/useApplicationData';

/**
 * Photo List Item Component - The specific photo in the Photo List Component
 * @param {*} props 
 * @returns JSX Element
 */
const PhotoListItem = (props) => {
  const { dispatch, photo, favouritePhotos } = props;
  const dispatchType = ACTIONS.SELECT_PHOTO;

  return (
    <figure className="photo-list__item">
      <PhotoFavButton dispatch={dispatch} photoId={photo.id} favouritePhotos={favouritePhotos} />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo" onClick={() => dispatch({ type: dispatchType, photo: photo })} />
      <figcaption className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`Profile picture of ${photo.user.name}`} />
        <section>
          <p className="photo-list__user-info">{photo.user.name}</p>
          <p className="photo-list__user-location"> {photo.location.city}, {photo.location.country} </p>
        </section>
      </figcaption>
    </figure>
  )
};

export default PhotoListItem;