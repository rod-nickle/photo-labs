import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = [ ...props.topics ];

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return <TopicListItem key={topic.id} title={topic.title} />;
      })}
    </div>
  );
};

export default TopicList;
