import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import AsyncStorage from '@react-native-community/async-storage';

class StopWatch extends Component {
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


    // 여기서는 초만 카운트 해서 state에 초만 가지고 있고,
    // render()안에서 Text에 그릴 때 초를 가지고 /60, %60으로 계산해서 뿌려도 될듯?
    // 초만 관리해야 데이터 관리가 조금 편해질듯. 그렇지 않으면 화면 여기저기 혹은 저장할때도 초와 분도 저장해야하기 때문에 불편.
    // 꼭 하라는건 아니고 참고!
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

    onButtonStop = async () => {
        clearInterval(this.state.timer);
        this.setState({ startDisable: false });

        await AsyncStorage.setItem(
            'stopWatchStopped',
            String(this.state.seconds_Counter),
        );
        this.props.navigation.navigate('Today');
    };

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
export default withNavigation(StopWatch);


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