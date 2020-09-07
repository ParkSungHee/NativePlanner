import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agenda from './screens/Agenda';
import Statistics from './screens/Statistics';
import Today from './screens/Today';
import StopWatch from './screens/StopWatch';

function AgendaScreen() {
  return (
    <Agenda />
  );
}

function TodayScreen() {
  return (
    <Today />
  );
}

function StopWatchScreen() {
  return (
    <StopWatch />
  );
}

function StatisticsSreen() {
  return (
    <Statistics />
  );
}

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'md-calendar'
                  : 'md-calendar-sharp';
              } else if (route.name === 'Agenda') {
                iconName = focused ? 'md-list-outline' : 'md-list';
              } else if (route.name === 'Today') {
                iconName = focused ? 'pencil-outline' : 'pencil';
              } else if (route.name === 'StopWatch') {
                iconName = focused ? 'play-outline' : 'play';
              } else if (route.name === 'Statistics') {
                iconName = focused ? 'ios-bar-chart-outline' : 'ios-bar-chart';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            }
          })
        }
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Agenda" component={AgendaScreen} />
          <Tab.Screen name="Today" component={TodayScreen} />
          <Tab.Screen name="StopWatch" component={StopWatchScreen} />
          <Tab.Screen name="Statistics" component={StatisticsSreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 5
  }
});