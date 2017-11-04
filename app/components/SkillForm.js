import React, {Component} from 'react';
import {View} from 'react-native'
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

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
                    style={{marginTop: 10}}
                    title={'Submit'}
                    onPress={() => {
                        this.props.createNewSkill(this.state.newSkill);
                        goBack();
                    }}
                />
            </View>
        )
    }
}