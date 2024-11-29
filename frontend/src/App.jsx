import React, { useState }from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState({});
  const [showPhotoDetailsModal, setShowPhotoDetailsModal] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});

  const toggleFavouritePhoto = (photoId) => {
    const newFavouritePhotos = { ...favouritePhotos};

    if (newFavouritePhotos[photoId]) {
      delete newFavouritePhotos[photoId];
    } else {
      newFavouritePhotos[photoId] = true;
    }
    setFavouritePhotos(newFavouritePhotos);
  };

  const togglePhotoDetailsModal = (photo) => {
    const newState = !showPhotoDetailsModal;
    setShowPhotoDetailsModal(newState);

    const newPhotoDetails = newState ? { ...photo} : {};
    setPhotoDetails(newPhotoDetails);
  }
  

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        toggleFavouritePhoto={toggleFavouritePhoto} 
        togglePhotoDetailsModal={togglePhotoDetailsModal} 
      />
      <PhotoDetailsModal 
        show={showPhotoDetailsModal} 
        photo={photoDetails} 
        favouritePhotos={favouritePhotos} 
        toggleFavouritePhoto={toggleFavouritePhoto} 
        togglePhotoDetailsModal={togglePhotoDetailsModal}
      />
    </div>
  );
};

export default App;
