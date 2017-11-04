import React, {Component} from 'react';
import {DatePickerIOS, Picker, ScrollView, Text} from 'react-native'
import {CheckBox, Button} from 'react-native-elements';


export default class TimeboxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTimebox: {
                lengthMinutes: 0,
                days: [],
                time: new Date(),
            },
        };
    }

    setLength(length: number) {
        newTimebox = this.state.newTimebox;
        newTimebox.lengthMinutes = length;
        this.setState({newTimebox: newTimebox});
    }

    toggleDay(day: string) {
        newTimebox = this.state.newTimebox;
        days = newTimebox.days;
        if (days.includes(day)) {
            idx = days.indexOf(day);
            days.splice(idx, 1);
        } else {
            days.push(day);
        }
        newTimebox.days = days;
        this.setState({newTimebox: newTimebox});
    }

    setTime(time: Date) {
        newTimebox = this.state.newTimebox;
        newTimebox.time = time;
        this.setState({newTimebox: newTimebox});
    }

    showChecked(day: string) {
        return this.state.newTimebox.days.includes(day);
    }


    render() {
        const days = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const {goBack} = this.props.navigation;
        return (
            <ScrollView>
                <Picker
                    selectedValue={this.state.newTimebox.lengthMinutes}
                    onValueChange={(value) => {
                        this.setLength(value);
                    }}
                    >
                    <Picker.Item label='15 minutes' value={15} />
                    <Picker.Item label='30 minutes' value={30} />
                    <Picker.Item label='60 minutes' value={60} />
                    <Picker.Item label='90 minutes' value={90} />
                </Picker>
                {
                    days.map((day, idx) => (
                        <CheckBox
                            title={day}
                            key={idx}
                            onPress={() => {
                                this.toggleDay(day);
                            }}
                            checked={this.showChecked(day)}
                        />
                    ))
                }
                <DatePickerIOS
                    mode={'time'}
                    date={this.state.newTimebox.time}
                    onDateChange={(date) => {
                        this.setTime(date);
                    }}
                />
                <Button
                    title={'Submit'}
                    onPress={() => {
                        this.props.addNewTimebox(this.state.newTimebox);
                        goBack();
                    }}
                />
                <Text>{JSON.stringify(this.state,null,4)}</Text>
            </ScrollView>
        )
    }
}