import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

/**
 * Photo List Component
 * @param {*} props 
 * @returns JSX Element
 */
const PhotoList = (props) => {
  const { dispatch, photos, favouritePhotos } = props;

  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map((photo) => {
        return <PhotoListItem key={photo.id} dispatch={dispatch} photo={photo} favouritePhotos={favouritePhotos} />;
      })}
    </ul>
  );
};

export default PhotoList;
