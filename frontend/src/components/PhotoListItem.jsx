import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const photoListItem = { ...props.photoListItem };

  return (
    <figure key={photoListItem.id} className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photoListItem.imageSource} alt="Photo" />
      <figcaption className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoListItem.profile} alt={`Profile picture of ${photoListItem.username}`} />
        <section>
          <p className="photo-list__user-info">{photoListItem.username}</p>
          <p className="photo-list__user-location"> {photoListItem.location.city}, {photoListItem.location.country} </p>
        </section>
      </figcaption>
    </figure>
  )
};

export default PhotoListItem;