import React from 'react';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './components/PhotoList';

const App = () => {
  return (
    <div className="App">
    < TopNavigation />
     <PhotoList />
    </div>
  );
};

export default App;
