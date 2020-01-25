import * as React from 'react';
import * as sleepEventReducer from '../logic/sleepEventReducer';
import * as sleepEvent from './../models/SleepEvent';
import './Log.css';

const Log: React.FC<{sleepEventsState: sleepEventReducer.SleepEventsStateType}> = ({sleepEventsState}) => {
  const options = {
    timeZone:"Europe/Helsinki",
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit"
  };
  
  const items = [];
  const eventsCount = sleepEventsState.sleepEvents.length;
  for (let i = 0; i < eventsCount; i++) {
    const event = sleepEventsState.sleepEvents[i];
    const symbol = sleepEvent.sleepStateToEmoji(event.state);
    const time = event.time.toLocaleTimeString("en-US", options);

    if (event.state == sleepEvent.SleepState.Asleep) {
      items.push(<div key={i}>{symbol}{time}</div>);
    }
    else {
      if (i+1 < eventsCount) {
        const nextEvent = sleepEventsState.sleepEvents[i+1];
        let differenceInMinutes = Math.trunc((nextEvent.time.getTime()-event.time.getTime())/60000);
        if (differenceInMinutes < 180) {
          const nextSymbol = sleepEvent.sleepStateToEmoji(nextEvent.state);
          const nextTime = nextEvent.time.toLocaleTimeString("en-US", options);
          items.push(<div key={i}>{symbol}{time} {nextSymbol}{nextTime}</div>);
          i++;
        }
        else {
          items.push(<div className="separator" key={i}>{symbol}{time}</div>);
        }
      }
      else {
        items.push(<div key={i}>{symbol}{time}</div>);
      }
    }


  }

  return (
    <div className="log">
      {items}
    </div>
  );
};

export default Log;