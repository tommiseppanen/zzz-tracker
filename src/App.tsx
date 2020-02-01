import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import sleepEventReducer from './logic/sleepEventReducer';
import  * as actions from './logic/actions';

const App: React.FC = () => {
  const [sleepEvents, dispatchSleepEvents] = React.useReducer(sleepEventReducer, { sleepEvents: [] });

  React.useEffect(() => {
    actions.initSleepEvents(dispatchSleepEvents);
  }, []);

  return (
    <div className="app">
      <Log sleepEventsState={sleepEvents}/>
      <ActionBar addAwake={actions.addAwake(dispatchSleepEvents)} 
        addAwakeAndAsleep={actions.addAwakeAndAsleep(dispatchSleepEvents)} 
        addAsleep={actions.addAsleep(dispatchSleepEvents)}/>
    </div>
  );
}

export default App;
