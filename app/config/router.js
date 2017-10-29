/*
    For navigation, we are Using a TabNavigator with
    nested StackNavigators. The tabs will be used for
    high-level screens, and the stack for sub-screens.
 */

import {StackNavigator, TabNavigator} from 'react-navigation';
import {AddSkillScreen, MySkillsScreen} from '../screens/index';

const SkillsTab = StackNavigator(
    {
        MySkills: {
            screen: MySkillsScreen,
            headerMode: null,
            navigationOptions: {
                title: 'My Skills',
            },
        },
        AddSkill: {
            screen: AddSkillScreen,
            title: 'Add a new skill',
        },
    },
);

export const SkillTreeNavigator = TabNavigator(
    {
        SkillsTab: {
            screen: SkillsTab,
            navigationOptions: {
                tabBarLabel: 'Skills'
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
    }
);