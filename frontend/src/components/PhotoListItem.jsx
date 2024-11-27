import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  // console.log("Props", props);
  const photoListItem = { ...props.photoListItem };
  // console.log("PhotoListItem", photoListItem);
  return (
    <div className="photo-list__item">
      <h2>PhotoListItem Component</h2>
      <img className="photo-list__image" src={photoListItem.imageSource} alt="Photo" ></img>
      <img className="photo-list__user-profile" src={photoListItem.profile} alt="Profile" ></img>
      <p className="photo-list__user-info"> {photoListItem.username}</p>
      <p className="photo-list__user-location"> {photoListItem.location.city}, {photoListItem.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
