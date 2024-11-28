import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const photoList = [ ...props.photoList ]


  const mappedPhotoList = photoList.map((photoListItem, index) => {
    return (
      <figure key={index} className="photo-list__item">
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
  });

   return (
    <div>
      {mappedPhotoList}
    </div>
  );
};

export default PhotoListItem;
