import React from "react";
import "../styles/TopicListItem.scss";
import { ACTIONS } from 'hooks/useApplicationData';

/**
 * Topic List Item Component - The specific topic in the Topic List Component
 * @param {*} props 
 * @returns JSX Element
 */
const TopicListItem = (props) => {
  const { dispatch, topicId, title, selectedTopicId } = props;
  const dispatchType = ACTIONS.GET_PHOTOS_BY_TOPICS;
  const className = "topic-list__item" + (topicId === selectedTopicId ? " topic-list__item_selected" : "");

  return (
    <div className={className}>
      <span onClick={() => dispatch({ type: dispatchType, topicId: topicId })} >{title} </span>
    </div>
  );
};

export default TopicListItem;
