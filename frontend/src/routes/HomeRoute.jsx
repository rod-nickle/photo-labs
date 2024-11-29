import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, favouritePhotos, toggleFavouritePhoto } = props;
  const isFavPhotoExist = Object.keys(favouritePhotos).length > 0 ? true : false;

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} />
    </div>
  )
}

export default HomeRoute;
