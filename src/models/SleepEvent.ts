export enum SleepState {
    Awake,
    Asleep,
}

export default class SleepEvent {
    state: SleepState;
    time: Date;
    constructor(time: Date, state: SleepState) {
        this.time = time;
        this.state = state;
    }
} 