import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = (props) => {
  const { photos, favouritePhotos, toggleFavouritePhoto } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouritePhotos={favouritePhotos} />
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} />
    </div>
  )
}

export default HomeRoute;
