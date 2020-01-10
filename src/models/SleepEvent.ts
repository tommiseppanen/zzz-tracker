enum SleepState {
    awake,
    asleep,
}

export default class SleepEvent {
    type: SleepState | undefined;
    time: Date | undefined;
} 