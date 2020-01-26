import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import sleepEventReducer, * as sleepEvent from './logic/sleepEventReducer';
import SleepEventDatabase from './models/SleepEventDatabase';

const App: React.FC = () => {
  function loadSleepEvents(): sleepEvent.SleepEventsStateType {
    const db = new SleepEventDatabase();
    db.sleepEvents.toArray().then(events => {
      console.log(events);
      return { sleepEvents: events };
    });
    return { sleepEvents: [] };
  }
  const [sleepEvents, dispatchSleepEvents] = React.useReducer(sleepEventReducer, { sleepEvents: [] }, loadSleepEvents);

  return (
    <div className="app">
      <Log sleepEventsState={sleepEvents}/>
      <ActionBar dispatch={dispatchSleepEvents}/>
    </div>
  );
}

export default App;
