import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favouriteSelected, setfavouriteSelected] = useState(false);
  const { incrementFavouritePhotoCount } = props;

  const handleClick = () => {
    const newState = !favouriteSelected
    incrementFavouritePhotoCount(newState ? 1 : -1);
    setfavouriteSelected(newState);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouriteSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;