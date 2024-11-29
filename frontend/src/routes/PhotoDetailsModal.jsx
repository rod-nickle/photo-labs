import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = (props) => {
  const { show, photo, togglePhotoDetailsModal } = props;
  const className = "photo-details-modal " + (show ? "photo-details-modal__show" : "photo-details-modal__hide");
  let photoUrl = "";
  let photographerProfile = "";
  let photographerName = "";
  let photographerCity = "";
  let photographerCountry = "";
  let similarPhotos = [];

  if (Object.keys(photo).length > 0) {
    photoUrl = photo.urls.regular;
    photographerProfile = photo.user.profile;
    photographerName = photo.user.name;
    photographerCity = photo.location.city;
    photographerCountry = photo.location.country;
    similarPhotos = Object.values(photo.similar_photos);
  }

  const handleClick = () => {
    togglePhotoDetailsModal();
  };

  return (
    <div className={className} >
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <figure className="photo-details-modal__header">
        <img className="photo-details-modal__image" src={photoUrl} alt="Photo" />
        <figcaption className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photographerProfile} alt="Profile Picture" />
          <section>
            <p className="photo-details-modal__photographer-info">{photographerName}</p>
            <p className="photo-details-modal__photographer-location"> {photographerCity}, {photographerCountry} </p>
          </section>
        </figcaption>
      </figure>
      <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;


