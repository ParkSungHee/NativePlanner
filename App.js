import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agenda from './screens/Agenda';
import Statistics from './screens/Statistics';
import Today from './screens/Today';
import StopWatch from './screens/StopWatch';

// 탭을 생성할 때, react navigation 라이브러리가
// 스크린이 될 컴포넌트에 navigation 객체를 props의 형태로 전달해야하기 때문에
// props로 받은 것들을 모두 컴포넌트의 props로 넘겨주는 부분 필요
// 그러면 Agenda.js의 코드와 같이 props에서 navigation을 접근할 수 있게 된다.
function AgendaScreen(props) {
  return <Agenda {...props} />;
}

function TodayScreen(props) {
  return <Today {...props} />;
}

function StopWatchScreen(props) {
  return (
    <StopWatch {...props}/>
  );
}

function StatisticsSreen(props) {
  return (
    <Statistics {...props}/>
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