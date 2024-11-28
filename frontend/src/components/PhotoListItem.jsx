import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const photoListItem = { ...props.photoListItem };

  return (
    <figure className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photoListItem.urls.regular} alt="Photo" />
      <figcaption className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoListItem.user.profile} alt={`Profile picture of ${photoListItem.user.name}`} />
        <section>
          <p className="photo-list__user-info">{photoListItem.user.name}</p>
          <p className="photo-list__user-location"> {photoListItem.location.city}, {photoListItem.location.country} </p>
        </section>
      </figcaption>
    </figure>
  )
};

export default PhotoListItem;