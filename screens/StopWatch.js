import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

export default class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopwatchStart: false,
            stopwatchReset: false
        };
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>
                <Stopwatch laps msecs start={this.state.stopwatchStart}
                    reset={this.state.stopwatchReset}
                    options={options}
                    getTime={this.getFormattedTime} />
                <TouchableHighlight onPress={this.toggleStopwatch}>
                    <Text style={{ fontSize: 25 }}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetStopwatch}>
                    <Text style={{ fontSize: 25 }}>Reset</Text>
                </TouchableHighlight>
            </View>
            </View>
        );
    }
}

const options = {
    container: {
        padding: 5,
        borderRadius: 5,
        width: 220
    },
    text: {
        fontSize: 33
    }
};