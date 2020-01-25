import * as React from 'react';
import './ActionBar.css';
import Emoji from './Emoji';
import * as sleepEventReducer from '../logic/sleepEventReducer';

const ActionBar: React.FC<{dispatch: React.Dispatch<sleepEventReducer.SleepActionType>}> = ({dispatch}) => {
  return (
    <div className="action-bar">
      <div className="action-bar__button" onClick={() => dispatch({ type: 'add-asleep' })}>
        <Emoji symbol="😴" label="fell asleep"/>
        </div>
      <div className="action-bar__button"><Emoji symbol="👀😴" label="woke up and fell asleep"/></div>
      <div className="action-bar__button"><Emoji symbol="👀" label="woke up"/></div>
    </div>
  );
};

export default ActionBar;