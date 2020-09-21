import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        console.log('ToDo props 접근: ', props);

        this.state = {
            category: "",
            should: "",
            goal: "",
            text: ""
        };

        this.saveItem = async (value) => {
            try {
                const jsonTodo = JSON.stringify(value)
                await AsyncStorage.setItem('@todo', jsonTodo);
                alert('saved data');
            } catch (e) {
                console.log(e);
            }
        };

        this.loadData = async () => {
            try {
                const jsonTodo = await AsyncStorage.getItem('@todo');
                let json = JSON.parse(jsonTodo);
                alert(json.category);
            } catch (e) {
                console.log(e);
            }
        }

        this.handlCategory = (should, goal) => {
            this.setState({ category: should, goal: goal });
        };

        this.handleShould = text => {
            this.setState({ should: text });
        };

        this.handleGoal = text => {
            this.setState({ goal: text });
        };
    }

    componentDidMount() {
        var year = new Date().getFullYear(); //Current Year
        var month = new Date().getMonth() + 1; //Current Month
        var day = new Date().getDay() + 1; //Current Day
        this.setState({
            date:
                year + '-' + month + '-' + day
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 8, margin: 60 }}>
                    <TouchableOpacity>
                        <View style={styles.input}>
                            <Text
                                value={this.state.category}
                                style={{ marginTop: 10 }}
                                onPress={() => Alert.alert('선택하십시오', '', [
                                    { text: '시간', onPress: () => { this.handlCategory('시간') } },
                                    { text: '분량', onPress: () => { this.handlCategory('분량') } }
                                ])}>{this.state.category}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="해야할 것"
                        placeholderTextColor="#FA5858"
                        autoCapitalize="none"
                        onChangeText={this.handleShould}
                        value={this.state.should}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="목표"
                        placeholderTextColor="#FA5858"
                        autoCapitalize="none"
                        onChangeText={this.handleGoal}
                        value={this.state.goal}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => Alert.alert('저장하시겠습니까?', '', [ //읽기는 this.loadData()
                            { text: '취소' },
                            {
                                text: 'Ok', onPress: () => { 
                                    this.saveItem(this.state) 
                                    + this.props.navigation.goBack('Today',{ //고치기
                                        category : this.state.category,
                                        should : this.state.should,
                                        goal : this.state.goal}
                                        )
                                }
                            }
                        ]
                        )}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text>{this.state.text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: "#FA5858",
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: "#FA5858",
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: "white"
    }
});