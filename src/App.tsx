import React from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import Log from './components/Log';
import sleepEventReducer from './logic/sleepEventReducer';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(sleepEventReducer, { sleepEvents: [] });
  return (
    <div className="app">
      <Log sleepEventsState={state}/>
      <ActionBar dispatch={dispatch}/>
    </div>
  );
}

export default App;
