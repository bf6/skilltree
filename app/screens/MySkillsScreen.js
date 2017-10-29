import React, {Component} from 'react';
import {Button, List, ListItem} from 'react-native-elements';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';


@inject('skillsStore')
@observer
export default class MySkillsScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <List containerStyle={styles.list}>
                    {
                        this.props.skillsStore.skills.map((skill, i) => (
                            <ListItem
                                containerStyle={styles.listItem}
                                hideChevron={true}
                                key={i}
                                title={skill.name}
                                rightTitle={skill.timeTrained}
                                leftIcon={{name: skill.icon}}
                            />
                        ))
                    }
                </List>
                <Button
                    raised
                    icon={{name: 'add-circle'}}
                    title='Add a skill!'
                    onPress={() => navigate('AddSkill')}
                />
                <Text>{JSON.stringify(this.props.skillsStore)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 0,
        marginBottom: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listItem: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
});