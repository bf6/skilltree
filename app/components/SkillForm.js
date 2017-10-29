import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native'
import {Button, FormLabel, FormInput, FormValidationMessage, Text} from 'react-native-elements';
import {inject} from 'mobx-react';

@inject('skillsStore')
export default class SkillForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: 'Please enter a name',
            newSkill: {
                name: null,
                icon: 'help',
                timeTrained: '3 hours',
            },
        };
    }

    updateSkillName(newName: string) {
        newSkill = this.state.newSkill;
        newSkill.name = newName;
        this.setState({newSkill: newSkill});
        if (!newName) {
            this.setState({errorMessage: 'Please enter a name'});
        }
        else {
            this.setState({errorMessage: null});
        }
    }

    updateSkillIcon(newIcon: string) {
        newSkill = this.state.newSkill;
        newSkill.icon = newIcon;
        this.setState({newSkill: newSkill})
    }

    createNewSkill() {
        this.props.skillsStore.addNewSkill(this.state.newSkill);
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={(text) => this.updateSkillName(text)}/>
                {
                    this.state.errorMessage &&
                    <FormValidationMessage>
                        {this.state.errorMessage }
                    </FormValidationMessage>
                }
                <FormLabel>Icon</FormLabel>
                <FormInput onChangeText={(text) => this.updateSkillIcon(text)}/>
                <Button
                    raised
                    title={'Submit'}
                    onPress={() => {
                        this.createNewSkill();
                        goBack();
                    }}
                />
            </View>
        )
    }
}