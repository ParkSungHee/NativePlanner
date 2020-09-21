import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./navigator/BottomTabNavigator";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    );
  }
}