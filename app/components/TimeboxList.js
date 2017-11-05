import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {List, ListItem} from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

@observer
export default class TimeboxList extends Component {

    renderTitle(days, time) {
        strTime = time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        return `${days} at ${strTime}`;
    }

    render() {
        return (
            <List containerStyle={styles.list}>
                {
                    this.props.timeboxes.map((timebox, i) => (
                        <Swipeout
                            key={i}
                            right={[{
                                text: 'Delete',
                                backgroundColor: 'red',
                                underlayColor: 'rgba(0, 0, 0, 0.6)',
                                onPress: () => {this.props.deleteTimebox(i)},
                            }]}
                            autoClose={true}
                            backgroundColor='transparent'
                        >
                            <ListItem
                                onPress={() => alert(JSON.stringify(this.props))}
                                containerStyle={styles.listItem}
                                hideChevron={true}
                                title={this.renderTitle(timebox.days, timebox.time)}
                                rightTitle={timebox.length}
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