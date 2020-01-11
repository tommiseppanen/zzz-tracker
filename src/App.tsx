import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import SleepEvent, {SleepState} from './models/SleepEvent';

const App: React.FC = () => {
  const events: SleepEvent[] = [new SleepEvent(new Date(), SleepState.Asleep), 
    new SleepEvent(new Date(), SleepState.Awake)];
  return (
    <div className="app">
      <Log sleepEvents={events}/>
      <ActionBar/>
    </div>
  );
}

export default App;
