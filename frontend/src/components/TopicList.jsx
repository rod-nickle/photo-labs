import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { dispatch, topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return <TopicListItem key={topic.id} dispatch={dispatch} topicId={topic.id} title={topic.title} />;
      })}
    </div>
  );
};

export default TopicList;
