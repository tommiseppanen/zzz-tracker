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
  
  function formatLogEntry(key: number, symbol: string, time: string, modifier: string = ""): JSX.Element {    
    const className = modifier.length > 0 ? `log__entry--${modifier}` : "log__entry";
    return  <div className={className} key={key}>{time} {symbol}</div>;
  }

  const items = [];
  const eventsCount = sleepEventsState.sleepEvents.length;
  for (let i = 0; i < eventsCount; i++) {
    const event = sleepEventsState.sleepEvents[i];
    const symbol = sleepEvent.sleepStateToEmoji(event.state);
    const time = event.time.toLocaleTimeString("en-US", options);

    if (event.state == sleepEvent.SleepState.Asleep) {
      items.push(formatLogEntry(i, symbol, time));
    }
    else {
      if (i+1 < eventsCount) {
        const nextEvent = sleepEventsState.sleepEvents[i+1];
        let timeDifference = nextEvent.time.getTime()-event.time.getTime();
        let differenceInMinutes = Math.trunc(timeDifference/60000);
        if (differenceInMinutes < 180) {
          const nextSymbol = sleepEvent.sleepStateToEmoji(nextEvent.state);
          const nextTime = nextEvent.time.toLocaleTimeString("en-US", options);
          const nextTimeString = time === nextTime ? "" : ` ${nextTime}`;
          items.push(<div className="log__entry" key={i}>{time} {symbol}{nextTimeString} {nextSymbol}</div>);
          i++;
        }
        else {
          items.push(formatLogEntry(i, symbol, time, "separator"));
        }
      }
      else {
        items.push(formatLogEntry(i, symbol, time));
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