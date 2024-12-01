import React, { useEffect }from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData, {ACTIONS } from 'hooks/useApplicationData';

const App = () => {
  const initialState = {
    favouritePhotos: [],
    isPhotoSelected: false,
    selectedPhoto: {},
    photoData: [],
    topicData: [],
  };

  const {state, dispatch} = useApplicationData(initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })});
    }, []);
    
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })});
  }, []);

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
   
