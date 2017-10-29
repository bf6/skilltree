import React, {Component} from 'react';
import {SkillForm} from '../components';

export default class AddSkillScreen extends Component {
    render() {
        return (
            <SkillForm navigation={this.props.navigation}/>
        );
    }
}