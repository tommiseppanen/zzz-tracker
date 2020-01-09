import * as React from 'react';
import './ActionBar.css';

const ActionBar: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="action-bar">
      <div className="action-bar__button"><span>button 1</span></div>
      <div className="action-bar__button"><span>button 2</span></div>
      <div className="action-bar__button"><span>button 3</span></div>
    </div>
  );
};

export default ActionBar;