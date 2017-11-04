import React, {Component} from 'react';
import {SkillForm} from '../components';
import {inject} from 'mobx-react';
import type {Skill} from 'app/config/types';


@inject('skillsStore')
export default class AddSkillScreen extends Component {

    createNewSkill(skill: Skill) {
        this.props.skillsStore.addNewSkill(skill);
    }

    render() {
        return (
            <SkillForm navigation={this.props.navigation}
                       createNewSkill={this.createNewSkill.bind(this)}
            />
        );
    }
}