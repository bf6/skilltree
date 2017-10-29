/*
 Timebox Store class with methods
 */

import { observable } from 'mobx';
import type {Timebox} from '../config/types';

export default class TimeboxStore {
    @observable timeboxes = [
        {
            time: '5pm',
            days: ['M', 'T', 'W'],
            length: '40 minutes',
        }
    ];

    addNewTimebox(timebox: Timebox) {
        this.timeboxes.push(timebox);
    }
}