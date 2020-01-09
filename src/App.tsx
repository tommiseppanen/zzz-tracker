import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';

const App: React.FC = () => {
  return (
    <div className="app">
      <Log/>
      <ActionBar/>
    </div>
  );
}

export default App;
