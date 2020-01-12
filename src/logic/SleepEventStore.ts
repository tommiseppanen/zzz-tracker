import SleepEvent, { SleepState } from './../models/SleepEvent';

export default class SleepEventStore {
    sleepEvents: SleepEvent[];

    constructor() {
        this.sleepEvents = [];
    } 

    AddAwake() {
        this.sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
    }

    AddAsleep() {
        this.sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
    }
} 