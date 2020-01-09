import * as React from 'react';
import './ActionBar.css';
import Emoji from './Emoji';

const ActionBar: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="action-bar">
      <div className="action-bar__button"><Emoji symbol="😴" label="fell asleep"/></div>
      <div className="action-bar__button"><Emoji symbol="👀😴" label="woke up and fell asleep"/></div>
      <div className="action-bar__button"><Emoji symbol="👀" label="woke up"/></div>
    </div>
  );
};

export default ActionBar;