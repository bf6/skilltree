/*
    For navigation, we are Using a TabNavigator with
    nested StackNavigators. The tabs will be used for
    high-level screens, and the stack for sub-screens.
 */

import {StackNavigator, TabNavigator} from 'react-navigation';
import {
    AddSkillScreen,
    MySkillsScreen,
    MyTimeboxesScreen,
    AddTimeboxScreen,
    SkillDetailScreen,
    TrainSkillScreen,
} from '../screens';

const SkillsTab = StackNavigator(
    {
        MySkills: {
            screen: MySkillsScreen,
            navigationOptions: {
                title: 'My Skills',
            },
        },
        AddSkill: {
            screen: AddSkillScreen,
            navigationOptions: {
                title: 'Add a skill',
            },
        },
        SkillDetail: {
            screen: SkillDetailScreen,
        },
        TrainSkill: {
            screen: TrainSkillScreen,
        }
    },
);

const ScheduleTab = StackNavigator(
    {
        MyTimeboxes: {
            screen: MyTimeboxesScreen,
            navigationOptions: {
                title: 'My Schedule'
            },
        },
        AddTimebox: {
            screen: AddTimeboxScreen,
            navigationOptions: {
                title: 'Add a timebox'
            },
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
        ScheduleTab: {
            screen: ScheduleTab,
            navigationOptions: {
                tabBarLabel: 'Schedule'
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
    }
);