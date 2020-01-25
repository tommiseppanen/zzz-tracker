import * as React from 'react';
import './ActionBar.css';
import Emoji from './Emoji';
import * as sleepEventReducer from '../logic/sleepEventReducer';

const ActionBar: React.FC<{dispatch: React.Dispatch<sleepEventReducer.SleepActionType>}> = ({dispatch}) => {
  const addAsleep = () => {
    dispatch({ type: 'add-asleep' });
    console.log("test");
  };
  const addAwakeAndAsleep = () => {
    dispatch({ type: 'add-awake-and-asleep' });
  };
  const addAwake = () => {
    dispatch({ type: 'add-awake' });
  };
  return (
    <div className="action-bar">
      <div className="action-bar__button" onClick={addAsleep}>
        <Emoji symbol="😴" label="fell asleep"/>
        </div>
      <div className="action-bar__button" onClick={addAwakeAndAsleep}>
        <Emoji symbol="👀😴" label="woke up and fell asleep"/>
      </div>
      <div className="action-bar__button" onClick={addAwake}>
        <Emoji symbol="👀" label="woke up"/>
      </div>
    </div>
  );
};

export default ActionBar;