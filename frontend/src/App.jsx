import React, { useState }from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './components/HomeRoute';

const App = () => {
  const [favouritePhotoCount, setFavouritePhotocount] = useState(0);

  const incrementFavouritePhotoCount = (increment) => {
    setFavouritePhotocount(favouritePhotoCount + increment);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favouritePhotoCount={favouritePhotoCount} incrementFavouritePhotoCount={incrementFavouritePhotoCount} />
    </div>
  );
};

export default App;
