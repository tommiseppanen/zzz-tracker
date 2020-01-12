import * as React from 'react';
import SleepEventStore from '../logic/SleepEventStore';

const Log: React.FC<{sleepEventStore: SleepEventStore}> = ({sleepEventStore}) => {
  const options = {
    timeZone:"Europe/Helsinki",
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit"
  };
  return (
    <div className="Log">
      <div>Saturday 12.12.2021</div>
      <div>😴21:00</div>
      <div>👀😴23:00</div>
      <div>👀02:00 😴03:00</div>
      <div>👀😴05:00</div>
      <div>👀06:00</div>
      <div>{sleepEventStore.GetEvents().length}</div>
      {
        sleepEventStore.GetEvents().map((value, index) => 
          <div key={index}>{value.time.toLocaleTimeString("en-US", options)}</div>)
      }
    </div>
  );
};

export default Log;