import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favouriteSelected, setfavouriteSelected] = useState(false);

  // let displayAlert = false;

  // const handleClick = () => {
  //   setfavouriteSelected(!favouriteSelected);
  // };

  const handleClick = () => {
    setfavouriteSelected(prev => !prev);
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