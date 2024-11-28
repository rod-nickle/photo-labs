import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, incrementFavouritePhotoCount } = props;

  return (
    <figure className="photo-list__item">
      <PhotoFavButton incrementFavouritePhotoCount={incrementFavouritePhotoCount} />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo" />
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