import SleepEvent, { SleepState } from './../models/SleepEvent';

export default class SleepEventStore {
    private _sleepEvents: SleepEvent[];

    constructor() {
        this._sleepEvents = [];
    } 

    AddAwake() {
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
    }

    AddAsleep() {
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
    }

    AddAwakeAndAsleep(){
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Awake));
        this._sleepEvents.push(new SleepEvent(new Date(), SleepState.Asleep));
    }

    private StoreEvents(){

    }
} 