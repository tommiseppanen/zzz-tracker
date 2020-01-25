export enum SleepState {
    Awake,
    Asleep,
}

export function sleepStateToEmoji(sleepState:SleepState) {
    switch(sleepState) {
        case SleepState.Awake:
            return "👀";
        case SleepState.Asleep: 
            return "😴";
        default:
            throw new Error('Unknown SleepState: ' + sleepState);
    }
}

export default class SleepEvent {
    state: SleepState;
    time: Date;
    constructor(time: Date, state: SleepState) {
        this.time = time;
        this.state = state;
    }
} 