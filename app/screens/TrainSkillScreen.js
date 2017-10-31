import React, {Component} from 'react';
import {Button, Icon, Text} from 'react-native-elements'
import {StyleSheet, View} from 'react-native'

export default class SkillDetailScreen extends Component {
    render() {
        const skill = this.props.navigation.state.params.skill;
        const {navigate} = this.props.navigation;
        return (
            <Text>Train skill!</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
    icon: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    }
})