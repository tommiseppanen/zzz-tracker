import * as React from 'react';
import * as sleepEventReducer from '../logic/sleepEventReducer';
import * as sleepEvent from './../models/SleepEvent';

const Log: React.FC<{sleepEventsState: sleepEventReducer.SleepEventsStateType}> = ({sleepEventsState}) => {
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
      <div>{sleepEventsState.sleepEvents.length}</div>
      {
        sleepEventsState.sleepEvents.map((value, index) => {
          const symbol = sleepEvent.sleepStateToEmoji(value.state);
          const time = value.time.toLocaleTimeString("en-US", options);
          return <div key={index}>{symbol}{time}</div>
        })
      }
    </div>
  );
};

export default Log;