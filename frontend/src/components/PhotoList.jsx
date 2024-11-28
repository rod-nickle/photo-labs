import React from "react";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photoListItem={photo} />;
      })}
    </ul>
  );
};

export default PhotoList;
