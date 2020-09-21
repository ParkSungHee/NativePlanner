import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/native'

export default class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '00',
            startDisable: false
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    onButtonStart = () => {
        let timer = setInterval(() => {
            var num = (Number(this.state.seconds_Counter) + 1).toString(),
                count = this.state.minutes_Counter;

            if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) + 1).toString();
                num = '00';
            }

            this.setState({
                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({ timer });

        this.setState({ startDisable: true })
    }

    onButtonStop = () => {
        clearInterval(this.state.timer);
        this.setState({ startDisable: false });
        this.props.navigation.navigate('Today', {
            minutes:this.state.minutes_Counter,
            seconds:this.state.seconds_Counter
        })
    }

    onButtonClear = () => {
        this.setState({
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '00',
        });
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
                <TouchableOpacity
                    onPress={this.onButtonStart}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6347' }]}
                    disabled={this.state.startDisable} >
                    <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onButtonStop}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: '#FF6347' }]} >
                    <Text style={styles.buttonText}>STOP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onButtonClear}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6347' }]}
                    disabled={this.state.startDisable} >
                    <Text style={styles.buttonText}> CLEAR </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
//withNavigation(StopWatch);


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 7,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    counterText: {

        fontSize: 28,
        color: '#000'
    }
});