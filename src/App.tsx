import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';

const App: React.FC = () => {
  return (
    <div className="App">
      test
      <Log/>
      <ActionBar/>
    </div>
  );
}

export default App;
