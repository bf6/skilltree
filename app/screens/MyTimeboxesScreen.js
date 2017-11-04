import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {TimeboxList} from '../components';
import {Button} from 'react-native-elements';
import {View} from 'react-native';

@inject('timeboxStore')
export default class MyTimeboxesScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TimeboxList
                    timeboxes={this.props.timeboxStore.timeboxes}
                />
                <Button
                    raised
                    icon={{name: 'add-circle'}}
                    title='Add a timebox!'
                    onPress={() => navigate('AddTimebox')}
                />
            </View>
        )
    }
}