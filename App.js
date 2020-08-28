import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'

function HomeScreen() {
  return (
    <Home />
  );
}

function AgendaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function StopWatchScreen() {
  return (
    <></>
  );
}

function TodaySreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Today!</Text>
    </View>
  );
}

function StatisticsSreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Statistics!</Text>
    </View>
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
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-outline' : 'ios-list';
              } else if (route.name === 'StopWatch') {
                iconName = focused ? 'play-outline' : 'play';
              } else if (route.name === 'Today') {
                iconName = focused ? 'pencil-outline' : 'pencil';
              } else if (route.name === 'Statistics') {
                iconName = focused ? 'ios-bar-chart-outline' : 'ios-bar-chart';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Agenda" component={AgendaScreen} />
          <Tab.Screen name="StopWatch" component={StopWatchScreen} />
          <Tab.Screen name="Today" component={TodaySreen} />
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