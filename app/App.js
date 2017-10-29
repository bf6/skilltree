import React, {Component} from 'react';
import {View} from 'react-native';
import {StatusBarBackground} from './components';
import {SkillTreeNavigator} from './config/router'
import {Provider} from 'mobx-react'
import stores from './stores'


export default class App extends Component {
  render() {
    return (
        <Provider {...stores}>
          <View style={{flex:1}}>
            <StatusBarBackground/>
            <SkillTreeNavigator/>
          </View>
        </Provider>
    );
  }
}