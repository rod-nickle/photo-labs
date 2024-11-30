import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos, favouritePhotos, updateToFavPhotoIds, setPhotoSelected} = props;

  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} favouritePhotos={favouritePhotos} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} />;
      })}
    </ul>
  );
};

export default PhotoList;
