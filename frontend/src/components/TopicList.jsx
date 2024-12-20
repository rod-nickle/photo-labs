import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * Topic List Component
 * @param {*} props 
 * @returns JSX Element
 */
const TopicList = (props) => {
  const { dispatch, topics, selectedTopicId } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <TopicListItem 
            key={topic.id}
            dispatch={dispatch}
            topicId={topic.id}
            title={topic.title}
            selectedTopicId={selectedTopicId}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
