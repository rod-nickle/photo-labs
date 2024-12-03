import React, { useEffect }from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData, {ACTIONS } from 'hooks/useApplicationData';

/**
 * This is our App!
 * @returns The PhotoLabs App
 */
const App = () => {
  const initialState = {
    favouritePhotos: [],
    isPhotoSelected: false,
    selectedPhoto: {},
    selectedTopicId: null,
    isPhotosFilteredByFavourite: false,
    photoData: [],
    topicData: [],
  };

  // Custom Hook to manage the Application's State.
  const {state, dispatch} = useApplicationData(initialState);

  // Initial load of Photos.
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
    }, []);
    
  // Initial load of Topics.
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // When the Topic changes, re-load the photos.
  // Also handles clicking on the Logo. This will re-fetch all photos.
  useEffect(() => {
    const url = state.selectedTopicId ? `/api/topics/photos/${state.selectedTopicId}` : `/api/photos`;
    fetch(url)
      .then(res => res.json())
      .then(data => {dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })});
  }, [state.selectedTopicId]);

  
  return (
    <div className="App">
      <HomeRoute 
        dispatch={dispatch}
        topics={state.topicData} 
        photos={state.photoData} 
        favouritePhotos={state.favouritePhotos} 
      />
      <PhotoDetailsModal 
        dispatch={dispatch}
        show={state.isPhotoSelected} 
        photo={state.selectedPhoto} 
        favouritePhotos={state.favouritePhotos} 
      />
    </div>
  );
};

export default App;
   
