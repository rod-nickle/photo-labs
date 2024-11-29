import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { show, togglePhotoDetailsModal } = props;
  let className = "photo-details-modal " + (show ? "photo-details-modal__show" : "photo-details-modal__hide");

  const handleClick = () => {
    togglePhotoDetailsModal();
  };

  return (
    <div className={className} >
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
