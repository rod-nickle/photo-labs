import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import { ACTIONS } from 'hooks/useApplicationData';

const PhotoDetailsModal = (props) => {
  const { dispatch, show, photo, favouritePhotos } = props;
  const className = "photo-details-modal " + (show ? "photo-details-modal__show" : "photo-details-modal__hide");
  const dispatchType = ACTIONS.DESELECT_PHOTO;

  let photoId = null;
  let photoUrl = "";
  let photographerProfile = "";
  let photographerName = "";
  let photographerCity = "";
  let photographerCountry = "";
  let similarPhotos = [];

  if (photo && Object.keys(photo).length > 0) {
    photoId = photo.id;
    photoUrl = photo.urls.regular;
    photographerProfile = photo.user.profile;
    photographerName = photo.user.name;
    photographerCity = photo.location.city;
    photographerCountry = photo.location.country;
    similarPhotos = Object.values(photo.similar_photos);
  }

  return (
    <div className={className} >
      
      <button className="photo-details-modal__close-button" onClick={() => dispatch({ type: dispatchType })} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <figure className="photo-details-modal__header">
        <PhotoFavButton dispatch={dispatch} photoId={photoId} favouritePhotos={favouritePhotos} />
        <img className="photo-details-modal__image" src={photoUrl} alt="Photo" />
        <figcaption className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photographerProfile} alt={`Profile picture of ${photographerName}`} />
          <section>
            <p className="photo-details-modal__photographer-info">{photographerName}</p>
            <p className="photo-details-modal__photographer-location"> {photographerCity}, {photographerCountry} </p>
          </section>
        </figcaption>
      </figure>
      <div className="photo-details-modal__images">
        <PhotoList dispatch={dispatch} photos={similarPhotos} favouritePhotos={favouritePhotos}  />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;


