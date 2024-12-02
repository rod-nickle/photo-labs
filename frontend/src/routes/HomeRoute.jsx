import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

/**
 * Main component for the PhotoLabs App.
 * @param {*} props 
 * @returns JSX Element
 */
const HomeRoute = (props) => {
  const { dispatch, topics, photos, favouritePhotos } = props;
  const isFavPhotoExist = Array.isArray(favouritePhotos) && favouritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation dispatch={dispatch} topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList dispatch={dispatch} photos={photos} favouritePhotos={favouritePhotos} />
    </div>
  )
}

export default HomeRoute;
