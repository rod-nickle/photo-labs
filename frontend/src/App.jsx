import React, { useState }from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState({});
  const [showPhotoDetailsModal, setShowPhotoDetailsModal] = useState(false);

  const toggleFavouritePhoto = (photoId) => {
    const newFavouritePhotos = { ...favouritePhotos};

    if (newFavouritePhotos[photoId]) {
      delete newFavouritePhotos[photoId];
    } else {
      newFavouritePhotos[photoId] = true;
    }
    setFavouritePhotos(newFavouritePhotos);
  };

  const togglePhotoDetailsModal = () => setShowPhotoDetailsModal(true);
  

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} togglePhotoDetailsModal={togglePhotoDetailsModal} />
      <PhotoDetailsModal show={showPhotoDetailsModal} />
    </div>
  );
};

export default App;
