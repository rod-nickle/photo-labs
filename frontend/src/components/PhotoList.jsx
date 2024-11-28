import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const photos = [ ...props.photos ];

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photoListItem={photo} />;
      })}
    </ul>
  );
};

export default PhotoList;
