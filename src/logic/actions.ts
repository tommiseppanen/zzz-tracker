import {db} from './../models/SleepEventDatabase';
import SleepEvent, { SleepState } from './../models/SleepEvent';
import * as sleepEventReducer from '../logic/sleepEventReducer';

export function addAwake() {
    return (dispatch: React.Dispatch<sleepEventReducer.SleepActionType>) => {
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