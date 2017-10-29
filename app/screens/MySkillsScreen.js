import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import SkillList from '../components/SkillList';


@inject('skillsStore')
@observer
export default class MySkillsScreen extends Component {
    render() {
        return (
            <SkillList
                skills={this.props.skillsStore.skills}
                navigation={this.props.navigation}
            />
        )
    }
}