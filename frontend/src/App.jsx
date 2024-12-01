import React, { useState }from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const defaultState = {
    favouritePhotos: [],
    photoSelected: false,
    selectedPhoto: {},
  };

  const {state, dispatch} = useApplicationData(defaultState);

  return (
    <div className="App">
      <HomeRoute 
        dispatch={dispatch}
        topics={topics} 
        photos={photos} 
        favouritePhotos={state.favouritePhotos} 
      />
      <PhotoDetailsModal 
        dispatch={dispatch}
        show={state.photoSelected} 
        photo={state.selectedPhoto} 
        favouritePhotos={state.favouritePhotos} 
      />
    </div>
  );
};

export default App;
   
