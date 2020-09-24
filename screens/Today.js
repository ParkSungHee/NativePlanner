import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    FlatList
} from 'react-native'
import Pie from 'react-native-pie'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'

export default class Today extends Component {
    constructor(props) {
        super(props);
        console.log('TodayScreen에서 navigation 접근: ', props);

        this.state = {
            Category: '시간',
            todoList: {
                key1 : {
                    should: "백준",
                    goal: "3문제"
                },
                key2 : {
                    should: "강의 듣기",
                    goal: "2개"
                }
            }
        };
        this.loadData = async () => {
            try {
                const jsonTodo = await AsyncStorage.getItem('@todo');
                let json = JSON.parse(jsonTodo);
                alert(json.category + json.should + json.goal);
            } catch (e) {
                console.log(e);
            }
        };
        this.imm = () => {
            let changed = {
                ...this.state.todoList.key1,
                should: "메롱"
            }
            return changed;
        }

        // navigation focus 가 변경되는 것을 감시하는 리스너 추가
        // focus가 변경될 때 호출 됨
        this.props.navigation.addListener('focus', () => {
            this.getDataFromStopWatch();
            //this.setState({})
            // setState()로 셋팅하면 될듯?
        });
    }

    getDataFromStopWatch = async () => {
        const stopWatchStopped = await AsyncStorage.getItem('stopWatchStopped');
        console.log('##########', stopWatchStopped);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 7, marginTop: 10 }}>
                        <TouchableOpacity>
                            <Icon
                                name={'ios-add-outline'}
                                size={33}
                                onPress={() =>
                                    this.props.navigation.navigate('To Do')
                                }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.headertitle, { alignItems: 'center' }]}>
                    <Pie style={{ marginTop: 20 }}
                        radius={73}
                        innerRadius={67}
                        sections={[
                            {
                                percentage: 60,
                                color: '#FA5858',
                            },
                        ]}
                        backgroundColor="#ddd"
                    />
                    <View style={styles.gauge}> 
                        <Text style={[styles.gaugeText, { paddingLeft: 6 }]}>
                            {' '}
                            {'고치'}%{' '}
                        </Text>
                    </View>
                </View>
                <View style={[styles.content, { alignItems: 'center', marginTop: 15 }]}>
                </View>
                <View style={styles.footer} >
                    <View style={styles.containerTable}>
                        <TouchableOpacity>
                            <Text
                                onPress={() => Alert.alert('결과확인', 'bb', [
                                    {
                                        text: '취소',
                                        onPress: () => this.imm()+console.log(this.state)
                                    },
                                    {
                                        text: '확인',
                                        onPress: () => this.loadData()
                                    }
                                ])}>
                                결과 : 
                                </Text>
                        </TouchableOpacity>
                        <FlatList
                            data={this.state.datas}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => { Alert.alert(item.data); }}>
                                        <View style={{ borderWidth: 1, borderRadius: 8, padding: 8, margin: 8 }}>
                                            <Text>{item.todoList.key}</Text>
                                            <Text>{item.todoList.should}</Text>
                                        </View>
                                    </TouchableOpacity>)
                            }
                            }>
                        </FlatList>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        flexDirection: "row"
    },
    headertitle: {
        flex: 3
    },
    content: {
        flex: 1
    },
    footer: {
        flex: 7
    },
    gauge: {
        position: 'absolute',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    containerTable: { flex: 1, paddingLeft: 15, paddingRight: 15 },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row' }
});