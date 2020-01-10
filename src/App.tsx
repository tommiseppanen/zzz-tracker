import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import SleepEvent from './models/SleepEvent';

const App: React.FC = () => {
  const events: SleepEvent[] = [];
  return (
    <div className="app">
      <Log sleepEvents={events}/>
      <ActionBar/>
    </div>
  );
}

export default App;
