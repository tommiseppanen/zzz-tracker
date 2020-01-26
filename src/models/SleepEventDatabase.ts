import Dexie from 'dexie';

export default class SleepEventDatabase extends Dexie {
    sleepEvents: Dexie.Table<IStoredSleepEvent, number>;

    constructor () {
        super("SleepEventDatabase");
        this.version(1).stores({
            sleepEvents: '++id, state, time',
        });
        this.sleepEvents = this.table("sleepEvents");
    }
}

interface IStoredSleepEvent {
    id?: number,
    state: string;
    time: Date;
}