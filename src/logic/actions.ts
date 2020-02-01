import {db} from './../models/SleepEventDatabase';
import SleepEvent, { SleepState } from './../models/SleepEvent';
import * as sleepEventReducer from '../logic/sleepEventReducer';

export function addAwake(dispatch: React.Dispatch<sleepEventReducer.SleepActionType>) {
    return () => {
        const eventToAdd = new SleepEvent(new Date(), SleepState.Awake);
        db.sleepEvents
          .add(eventToAdd)
          .then((id) => {
             dispatch({
               type: 'add',
               payload: [eventToAdd],
             });
          });
    }
}

export function addAsleep(dispatch: React.Dispatch<sleepEventReducer.SleepActionType>) {
    return () => {
        const eventToAdd = new SleepEvent(new Date(), SleepState.Asleep);
        db.sleepEvents
          .add(eventToAdd)
          .then((id) => {
             dispatch({
               type: 'add',
               payload: [eventToAdd],
             });
          });
    }
}

export function addAwakeAndAsleep(dispatch: React.Dispatch<sleepEventReducer.SleepActionType>) {
    return () => {
        const awakeEvent = new SleepEvent(new Date(), SleepState.Awake);
        const asleepEvent = new SleepEvent(new Date(), SleepState.Asleep);
        db.sleepEvents
          .bulkAdd([awakeEvent,asleepEvent])
          .then((id) => {
             dispatch({
               type: 'add',
               payload: [awakeEvent,asleepEvent],
             });
          });
    }
}