import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {TimeboxForm} from '../components';
import type {Timebox} from 'app/config/types';

@inject('timeboxStore')
export default class AddTimeboxScreen extends Component {

    addNewTimebox(timebox: Timebox) {
        this.props.timeboxStore.addNewTimebox(timebox);
    }

    render() {
        return (
            <TimeboxForm navigation={this.props.navigation}
                         addNewTimebox={this.addNewTimebox.bind(this)}
            />
        );
    }
}