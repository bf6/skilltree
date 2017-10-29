import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {TimeboxForm} from '../components';

@inject('timeboxStore')
@observer
export default class AddTimeboxScreen extends Component {
    render() {
        return (
            <TimeboxForm navigation={this.props.navigation}/>
        );
    }
}