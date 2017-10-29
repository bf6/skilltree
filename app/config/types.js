/*
Created types to define the shape of objects
 */

export type Skill = {
    name: string;
    icon: string;
    timeTrained: ?string;
}

export type Timebox = {
    time: string,
    days: Array<string>,
    length: string,
}