import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, favouritePhotos, updateToFavPhotoIds, setPhotoSelected } = props;

  const handleClick = () => {
    setPhotoSelected(photo);
  };

  return (
    <figure className="photo-list__item">
      <PhotoFavButton photoId={photo.id} favouritePhotos={favouritePhotos} updateToFavPhotoIds={updateToFavPhotoIds} />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo" onClick={handleClick} />
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