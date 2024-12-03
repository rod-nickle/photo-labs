import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import { ACTIONS } from 'hooks/useApplicationData';

/**
 * Navigation Bar Component
 * @param {*} props 
 * @returns JSX Element
 */
const TopNavigation = (props) => {
  const { dispatch, topics, isFavPhotoExist } = props;
  let dispatchType = ACTIONS.GET_PHOTOS_BY_TOPICS;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => dispatch({ type: dispatchType })}>PhotoLabs</span>
      <TopicList dispatch={dispatch} topics={topics} />
      <FavBadge dispatch={dispatch} isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;