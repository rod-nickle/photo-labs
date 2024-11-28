import React from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from './components/HomeRoute';

const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
