/*
Skill Store class with methods
 */

import {observable} from 'mobx';
import type {Skill} from '../config/types';

export default class SkillsStore {
    @observable skills = [
        {
            name: 'Fitness',
            icon: 'fitness-center',
            timeTrained: '30 hours',
        },
        {
            name: 'Art',
            icon: 'brush',
            timeTrained: '10 hours',
        },
        {
            name: 'Meditation',
            icon: 'insert-emoticon',
            timeTrained: '5 hours',
        },
    ];

    addNewSkill(skill: Skill) {
        this.skills.push(skill);
    }

    deleteSkill(idx: number) {
        this.skills.splice(idx, 1);
    }
}