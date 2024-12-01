import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { dispatch, topics, isFavPhotoExist } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList dispatch={dispatch} topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;