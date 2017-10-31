import React, {Component} from 'react';
import {DatePickerIOS, StyleSheet, Text, View, Picker} from 'react-native'
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {inject} from 'mobx-react';


@inject('timeboxStore')
export default class TimeboxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTimebox: {
                length: '0',
                days: [],
                time: '',
            },
            date: new Date(),
        }
    }

    setLength(length: string) {
        newTimebox = this.state.newTimebox;
        newTimebox.length = length;
        this.setState({newTimebox: newTimebox});
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                <Picker
                    selectedValue={this.state.newTimebox.length}
                    onValueChange={this.setLength.bind(this)}>
                    <Picker.Item label='15 minutes' value='15 minutes' />
                    <Picker.Item label='30 minutes' value='30 minutes' />
                    <Picker.Item label='60 minutes' value='60 minutes' />
                    <Picker.Item label='90 minutes' value='90 minutes' />
                </Picker>
                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        )
    }
}