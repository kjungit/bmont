import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainTabNavigations} from '../../constants';
import MatchScreen from '../../screens/main/MatchScreen';
import LikeScreen from '../../screens/main/LikeScreen';
import ChatScreen from '../../screens/main/ChatScreen';
import MyPageScreen from '../../screens/main/MyPageScreen';
import {colors} from '../../constants';
import {StyleSheet} from 'react-native';

interface MainTabNavigatorProps {}
export type MainTabParamList = {
  [mainTabNavigations.MATCH]: undefined;
  [mainTabNavigations.LIKE]: undefined;
  [mainTabNavigations.CHAT]: undefined;
  [mainTabNavigations.MY_PAGE]: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabNavigator({}: MainTabNavigatorProps) {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.WHITE,
          shadowColor: colors.ORANGE_NORMAL,
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: colors.ORANGE_NORMAL,
        tabBarActiveTintColor: colors.ORANGE_NORMAL, // 선택된
        tabBarStyle: {
          backgroundColor: colors.WHITE,
          borderTopColor: colors.ORANGE_NORMAL,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        // tabBarIcon: ({focused}) => TabBarIcons(route, focused),
      })}>
      <Tab.Screen name={mainTabNavigations.MATCH} component={MatchScreen} />
      <Tab.Screen name={mainTabNavigations.LIKE} component={LikeScreen} />
      <Tab.Screen name={mainTabNavigations.CHAT} component={ChatScreen} />
      <Tab.Screen name={mainTabNavigations.MY_PAGE} component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
