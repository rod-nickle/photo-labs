import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { show } = props;
  let className = "photo-details-modal";

  if (show) {
    className += " photo-details-modal photo-details-modal__show";
  } else {
    className += " photo-details-modal__hide"
  }

  return (
    <div className={className} >
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
