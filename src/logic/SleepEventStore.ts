import SleepEvent, { SleepState } from './../models/SleepEvent';

export default class SleepEventStore {
    private _sleepEvents: SleepEvent[];

    constructor() {
        this._sleepEvents = [];
    }

    GetEvents() : SleepEvent[] {
        return this._sleepEvents;
    }

    AddAwake() {
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
    }

    AddAsleep() {
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
        console.log("Added asleep");
    }

    AddAwakeAndAsleep(){
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
    }

    private StoreEvents(){

    }
} 