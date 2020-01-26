import * as React from 'react';
import * as sleepEventReducer from '../logic/sleepEventReducer';
import SleepEvent, * as sleepEvent from './../models/SleepEvent';
import './Log.css';

const Log: React.FC<{sleepEventsState: sleepEventReducer.SleepEventsStateType}> = ({sleepEventsState}) => {
  const dateFormatOptions = {
    timeZone:"Europe/Helsinki",
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit"
  };
  const className = "log__entry";

  function formatEvent(key: number, event: SleepEvent, modifier: string = ""): JSX.Element {    
    const symbol = sleepEvent.sleepStateToEmoji(event.state);
    const time = event.time.toLocaleTimeString("en-US", dateFormatOptions);
    const cssClass = modifier.length > 0 ? `${className}--${modifier}` : className;
    return  <div className={cssClass} key={key}>{time} {symbol}</div>;
  }

  function formatDualEvent(key: number, event: SleepEvent, nextEvent: SleepEvent,): JSX.Element {    
    const symbol = sleepEvent.sleepStateToEmoji(event.state);
    const time = event.time.toLocaleTimeString("en-US", dateFormatOptions);
    const nextSymbol = sleepEvent.sleepStateToEmoji(nextEvent.state);
    const nextTime = nextEvent.time.toLocaleTimeString("en-US", dateFormatOptions);
    const nextTimeString = time === nextTime ? "" : ` ${nextTime}`;
    return <div className={className} key={key}>{time} {symbol}{nextTimeString} {nextSymbol}</div>;
  }

  const items = [];
  const eventsCount = sleepEventsState.sleepEvents.length;
  for (let i = 0; i < eventsCount; i++) {
    const event = sleepEventsState.sleepEvents[i];   

    if (event.state == sleepEvent.SleepState.Asleep) {
      items.push(formatEvent(i, event));
    }
    else {
      if (i+1 < eventsCount) {
        const nextEvent = sleepEventsState.sleepEvents[i+1];
        let timeDifference = nextEvent.time.getTime()-event.time.getTime();
        let differenceInMinutes = Math.trunc(timeDifference/60000);
        if (differenceInMinutes < 180) {         
          items.push(formatDualEvent(i, event, nextEvent));
          i++;
        }
        else {
          items.push(formatEvent(i, event, "separator"));
        }
      }
      else {
        items.push(formatEvent(i, event));
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