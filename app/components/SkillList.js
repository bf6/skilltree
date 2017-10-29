import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {List, ListItem} from 'react-native-elements';

const list = [
    {
        name: 'Fitness',
        icon: 'fitness-center',
        timeTrained: '30 hours',
    },
    {
        name: 'Art',
        icon: 'brush',
        timeTrained: '10 hours',
    },
    {
        name: 'Meditation',
        icon: 'insert-emoticon',
        timeTrained: '5 hours',
    },
];

export default class SkillList extends Component {
    render() {
        return (
            <List containerStyle={styles.list}>
                {
                    list.map((l,i) => (
                        <ListItem
                            containerStyle={styles.listItem}
                            hideChevron={true}
                            key={i}
                            title={l.name}
                            rightTitle={l.timeTrained}
                            leftIcon={{name: l.icon}}
                        />
                    ))
                }
            </List>
        )
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