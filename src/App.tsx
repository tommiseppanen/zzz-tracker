import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import sleepEventReducer from './logic/sleepEventReducer';

const App: React.FC = () => {
  const [sleepEvents, dispatchSleepEvents] = React.useReducer(sleepEventReducer, { sleepEvents: [] });
  return (
    <div className="app">
      <Log sleepEventsState={sleepEvents}/>
      <ActionBar dispatch={dispatchSleepEvents}/>
    </div>
  );
}

export default App;
