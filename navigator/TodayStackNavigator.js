import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Agenda from '../screens/Agenda';
import Statistics from '../screens/Statistics';
import Today from '../screens/Today';
import StopWatch from '../screens/StopWatch';
import ToDo from '../screens/ToDo';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#FF6347",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const AgendaStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Agenda" component={Agenda} />
        </Stack.Navigator>
    )
}

const TodayStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Today" component={Today} />
            <Stack.Screen name="ToDo" component={ToDo} />
        </Stack.Navigator>
    );
}

const StopWatchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="StopWatch" component={StopWatch} />
        </Stack.Navigator>
    )
}

const StatisticsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Statistics" component={Statistics} />
        </Stack.Navigator>
    )
}

export { AgendaStackNavigator, TodayStackNavigator, StopWatchStackNavigator, StatisticsStackNavigator };
