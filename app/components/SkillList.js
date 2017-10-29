import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {List, ListItem} from 'react-native-elements';

@observer
export default class SkillList extends Component {
    render() {
        return (
            <List containerStyle={styles.list}>
                {
                    this.props.skills.map((skill, i) => (
                        <ListItem
                            onPress={() => alert('Oh shiiiit')}
                            underlayColor={'green'}
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