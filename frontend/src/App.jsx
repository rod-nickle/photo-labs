import React, { useState }from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './components/HomeRoute';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState({});

  const toggleFavouritePhoto = (photoId) => {
    const newFavouritePhotos = { ...favouritePhotos};

    if (newFavouritePhotos[photoId]) {
      delete newFavouritePhotos[photoId];
    } else {
      newFavouritePhotos[photoId] = true;
    }
    setFavouritePhotos(newFavouritePhotos);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} />
    </div>
  );
};

export default App;
