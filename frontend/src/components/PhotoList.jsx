import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos, favouritePhotos, toggleFavouritePhoto } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} />;
      })}
    </ul>
  );
};

export default PhotoList;
