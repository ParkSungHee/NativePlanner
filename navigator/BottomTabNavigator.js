import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AgendaStackNavigator, TodayStackNavigator, StopWatchStackNavigator } from "./TodayStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Agenda') {
                        iconName = focused ? 'md-list-outline' : 'md-list';
                    } else if (route.name === 'Today') {
                        iconName = focused ? 'pencil-outline' : 'pencil';
                    } else if (route.name === 'StopWatch') {
                        iconName = focused ? 'play-outline' : 'play';
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
            <Tab.Screen name="Agenda" component={AgendaStackNavigator} />
            <Tab.Screen name="StopWatch" component={StopWatchStackNavigator} />
            <Tab.Screen name="Today" component={TodayStackNavigator} />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;