import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  // console.log("Props", props);
  const photoListItem = { ...props.photoListItem };
  // console.log("PhotoListItem", photoListItem);
  return (
    // <li key="photoListItem.id" className="photo-list__item">
    //   <img className="photo-list__image" src={photoListItem.imageSource} alt="Photo" ></img>
    //   <div className="photo-list__user-details">
    //     <img className="photo-list__user-profile" src={photoListItem.profile} alt="Profile" ></img>
    //     <section>
    //       <p className="photo-list__user-info"> {photoListItem.username}</p>
    //       <p className="photo-list__user-location"> {photoListItem.location.city}, {photoListItem.location.country}</p>
    //     </section>
    //   </div>
    // </li>
    <figure key={photoListItem.id} className="photo-list__item">
      <img className="photo-list__image" src={photoListItem.imageSource} alt="Photo" />
      <figcaption className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoListItem.profile} alt="Profile picture of {photoListItem.username}" />
        <section>
          <p className="photo-list__user-info">{photoListItem.username}</p>
          <p className="photo-list__user-location"> {photoListItem.location.city}, {photoListItem.location.country} </p>
        </section>
      </figcaption>
    </figure>
  )
};

export default PhotoListItem;
