import * as React from 'react';
import SleepEvent from './../models/SleepEvent';

const Log: React.FC<{sleepEvents: SleepEvent[]}> = (events) => {
  return (
    <div className="Log">
      <div>Saturday 12.12.2021</div>
      <div>😴21:00</div>
      <div>👀😴23:00</div>
      <div>👀02:00 😴03:00</div>
      <div>👀😴05:00</div>
      <div>👀06:00</div>
    </div>
  );
};

export default Log;