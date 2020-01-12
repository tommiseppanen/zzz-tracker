import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import SleepEventStore from './logic/SleepEventStore';

const App: React.FC = () => {
  const eventStore: SleepEventStore = new SleepEventStore();
  return (
    <div className="app">
      <Log sleepEventStore={eventStore}/>
      <ActionBar sleepEventStore={eventStore}/>
    </div>
  );
}

export default App;
