import * as React from 'react';

const ActionBar: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="action-bar">
      <div><span>button 1</span></div>
      <div><span>button 2</span></div>
      <div><span>button 3</span></div>
    </div>
  );
};

export default ActionBar;