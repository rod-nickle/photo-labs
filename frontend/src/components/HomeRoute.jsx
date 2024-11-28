import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = (props) => {
  const { photos, favouritePhotoCount, incrementFavouritePhotoCount } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouritePhotoCount={favouritePhotoCount} />
      <PhotoList photos={photos} incrementFavouritePhotoCount={incrementFavouritePhotoCount} />
    </div>
  )
}

export default HomeRoute;
