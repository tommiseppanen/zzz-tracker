import SleepEvent, { SleepState } from './../models/SleepEvent';

export type StateType = {
    sleepEvents: SleepEvent[];
  }

export type ActionType = {
    type: 'init' | 'add-awake' | 'add-asleep' | 'add-awake-and-asleep'
  }

export function sleepEventReducer(state: StateType, action: ActionType) {
    switch (action.type) {
      case 'init':
        return { sleepEvents: []};
      case 'add-awake':
        return { sleepEvents: state.sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake)) };
      case 'add-asleep':
        return { sleepEvents: state.sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep))};
      case 'add-awake-and-asleep':
        let newSleepEvents = state.sleepEvents;
        newSleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
        newSleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
        return { sleepEvents:  newSleepEvents};
      default:
        return state;
    }
  }
  