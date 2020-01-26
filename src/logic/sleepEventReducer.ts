import SleepEvent, { SleepState } from './../models/SleepEvent';

export type SleepEventsStateType = {
  sleepEvents: SleepEvent[]
}

export type SleepActionType = {
  type: 'init' | 'add-awake' | 'add-asleep' | 'add-awake-and-asleep',
  payload?: SleepEvent[]
}

export default function sleepEventReducer(state: SleepEventsStateType, action: SleepActionType) : SleepEventsStateType {
  switch (action.type) {
    case 'init':
      const events = action.payload === undefined ? [] : action.payload;
      return { sleepEvents: events};
    case 'add-awake': {
      let newSleepEvents = state.sleepEvents;
      newSleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
      return { sleepEvents: newSleepEvents };
    }
    case 'add-asleep': {
      let newSleepEvents = state.sleepEvents;
      newSleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
      return { sleepEvents: newSleepEvents };
    }
    case 'add-awake-and-asleep': {
      let newSleepEvents = state.sleepEvents;
      newSleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
      newSleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
      return { sleepEvents:  newSleepEvents};
    }
    default:
      return state;
  }
}
  