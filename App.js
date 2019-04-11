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
import SelectImage from './components/screens/SelectImage';
import { Icon } from 'react-native-elements';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search,
  SelectImage: SelectImage,
  Notifications: Notifications,
  Settings: Settings
  
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
            break;
          case 'SelectImage':
            iconName = `plus-square`;
            break;
          case 'Settings':
            iconName = `user`;
            break;
          case 'Notifications':
            iconName = `heart`;
            break
        }

        // You can return any component that you like here!
        return <Icon name={iconName} reverseColor='red' type='feather' size={35} color={tintColor} solid/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showLabel: false, style: {
        height: 50
      }
    },
  });
const stackNavigator = createStackNavigator({
  root: {
    screen: TabNavigator, navigationOptions: ({ navigation }) => ({
      title: navigation.state.routes[navigation.state.index].routeName,
      
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
