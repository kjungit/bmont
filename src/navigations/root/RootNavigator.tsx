import React from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainTabNavigator from '../tab/MainTabNavigator';

interface RootNavigatorProps {}

function RootNavigator({}: RootNavigatorProps) {
  const isLogin = true;
  return <>{isLogin ? <MainTabNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
