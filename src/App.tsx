import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import sleepEventReducer, * as sleepEvent from './logic/sleepEventReducer';
import SleepEventDatabase from './models/SleepEventDatabase';

const App: React.FC = () => {
  const [sleepEvents, dispatchSleepEvents] = React.useReducer(sleepEventReducer, { sleepEvents: [] });

  React.useEffect(() => {
    const db = new SleepEventDatabase();
    db.sleepEvents.toArray().then(events => {
      console.log(events);
      dispatchSleepEvents({ type: 'init', payload: events });
    });
    //db.sleepEvents.put({state: 1, time: new Date()});
  });

  return (
    <div className="app">
      <Log sleepEventsState={sleepEvents}/>
      <ActionBar dispatch={dispatchSleepEvents}/>
    </div>
  );
}

export default App;
