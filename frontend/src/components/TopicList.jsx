import React from "react";
import "../styles/TopicList.scss";
import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return <TopicListItem key={topic.id} title={topic.title} />;
      })}
    </div>
  );
};

export default TopicList;
