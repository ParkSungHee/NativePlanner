import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Agenda from '../screens/Agenda';
import Today from '../screens/Today';
import StopWatch from '../screens/StopWatch';
import ToDo from '../screens/(예전)ToDo';

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
            <Stack.Screen name="To Do List">
                {props => <Agenda {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

const TodayStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="오늘의 계획">
                {props => <Today {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

const StopWatchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="StopWatch" >
                {props => <StopWatch {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export { AgendaStackNavigator, TodayStackNavigator, StopWatchStackNavigator };
