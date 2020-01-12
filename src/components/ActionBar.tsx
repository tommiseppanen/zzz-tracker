import * as React from 'react';
import './ActionBar.css';
import Emoji from './Emoji';
import SleepEventStore from '../logic/SleepEventStore';

const ActionBar: React.FC<{sleepEventStore: SleepEventStore}> = ({sleepEventStore}) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="action-bar">
      <div className="action-bar__button" onClick={() => sleepEventStore.AddAsleep()}>
        <Emoji symbol="😴" label="fell asleep"/>
        </div>
      <div className="action-bar__button"><Emoji symbol="👀😴" label="woke up and fell asleep"/></div>
      <div className="action-bar__button"><Emoji symbol="👀" label="woke up"/></div>
    </div>
  );
};

export default ActionBar;