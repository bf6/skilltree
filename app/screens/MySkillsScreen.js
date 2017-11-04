import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {SkillList} from '../components';
import {View} from 'react-native'
import {Button} from 'react-native-elements'

@inject('skillsStore')
export default class MySkillsScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <SkillList
                    skills={this.props.skillsStore.skills}
                    navigation={this.props.navigation}
                />
                <Button
                    raised
                    icon={{name: 'add-circle'}}
                    title='Add a skill!'
                    onPress={() => navigate('AddSkill')}
                />
            </View>
        )
    }
}