import SleepEvent, { SleepState } from './../models/SleepEvent';

export type SleepEventsStateType = {
  sleepEvents: SleepEvent[]
}

export type SleepActionType = {
  type: 'init' | 'add',
  payload?: SleepEvent[]
}

export default function sleepEventReducer(state: SleepEventsStateType, action: SleepActionType) : SleepEventsStateType {
  switch (action.type) {
    case 'init':
      const events = action.payload === undefined ? [] : action.payload;
      return { sleepEvents: events};
    case 'add': {
      const events = action.payload === undefined ? [] : action.payload;
      return { sleepEvents: state.sleepEvents.concat(events)};
    }
    default:
      return state;
  }
}
  