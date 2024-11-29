import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, favouritePhotos, toggleFavouritePhoto, togglePhotoDetailsModal } = props;
  const isFavPhotoExist = Object.keys(favouritePhotos).length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} toggleFavouritePhoto={toggleFavouritePhoto} togglePhotoDetailsModal={togglePhotoDetailsModal} />
    </div>
  )
}

export default HomeRoute;
