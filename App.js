/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home';
import Settings from './components/screens/Settings';
import Search from './components/screens/Search';
import Notifications from './components/screens/Notifications';
import { Icon } from 'react-native-elements';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
  Home: Home, Search: Search,
  Settings: Settings,
  Notifications: Notifications
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = `home`;
            break;
          case 'Search':
            iconName = `search`;
            break
          case 'Settings':
            iconName = `cog`;
            break;
          case 'Notifications':
            iconName = `bell`;
            break
        }

        // You can return any component that you like here!
        return <Icon name={iconName} type='font-awesome' size={40} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showLabel: false, style: {
        height: 70
      }
    },
  });
const stackNavigator = createStackNavigator({
  root: {
    screen: TabNavigator, navigationOptions: ({ navigation }) => ({
      title: navigation.state.routes[navigation.state.index].routeName
    })
  }
})

export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
