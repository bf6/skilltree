/*
Created types to define the shape of objects
 */

export type Skill = {
    name: string;
    icon: string;
    timeTrained: ?number;
}

export type Timebox = {
    time: Date,
    days: Array<string>,
    lengthMinutes: number,
}