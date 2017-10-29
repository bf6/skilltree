import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native'
import {Button, List, ListItem, Text} from 'react-native-elements';

@observer
export default class SkillList extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <List containerStyle={styles.list}>
                    {
                        this.props.skills.map((skill, i) => (
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
                <Text>{JSON.stringify(this.props.skills)}</Text>
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