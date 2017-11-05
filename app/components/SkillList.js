import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {List, ListItem} from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

@observer
export default class SkillList extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <List containerStyle={styles.list}>
                {
                    this.props.skills.map((skill, i) => (
                        <Swipeout
                            key={i}
                            right={[{
                                text: 'Delete',
                                backgroundColor: 'red',
                                underlayColor: 'rgba(0, 0, 0, 0.6)',
                                onPress: () => {this.props.deleteSkill(i)},
                            }]}
                            autoClose={true}
                            backgroundColor='transparent'
                        >
                            <ListItem
                                onPress={() => navigate('SkillDetail', {skill})}
                                containerStyle={styles.listItem}
                                hideChevron={true}
                                title={skill.name}
                                rightTitle={skill.timeTrained}
                                leftIcon={{name: skill.icon}}
                            />
                        </Swipeout>
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