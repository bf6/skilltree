import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {SkillList} from '../components';
import {View} from 'react-native'
import {Button} from 'react-native-elements'


@inject('skillsStore')
@observer
export default class MySkillsScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <SkillList
                    skills={this.props.skillsStore.skills}
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