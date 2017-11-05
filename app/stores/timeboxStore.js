/*
 Timebox Store class with methods
 */

import { observable } from 'mobx';
import type {Timebox} from '../config/types';

export default class TimeboxStore {
    @observable timeboxes = [
        {
            time: new Date(),
            days: ['S','M','T','W','R','F','Sa'],
            lengthMinutes: 30,
        }
    ];

    addNewTimebox(timebox: Timebox) {
        this.timeboxes.push(timebox);
    }

    deleteTimebox(idx: number) {
        this.timeboxes.splice(idx, 1);
    }
}