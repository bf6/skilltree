import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {List, ListItem} from 'react-native-elements';

@observer
export default class TimeboxList extends Component {
    render() {
        return (
            <List containerStyle={styles.list}>
                {
                    this.props.timeboxes.map((timebox, i) => (
                        <ListItem
                            onPress={() => alert('SHYZA')}
                            underlayColor={'green'}
                            containerStyle={styles.listItem}
                            hideChevron={true}
                            key={i}
                            title={`${timebox.days} at ${timebox.time}`}
                            rightTitle={timebox.length}
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