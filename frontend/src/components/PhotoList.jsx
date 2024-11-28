import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos, incrementFavouritePhotoCount } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} incrementFavouritePhotoCount={incrementFavouritePhotoCount} />;
      })}
    </ul>
  );
};

export default PhotoList;
