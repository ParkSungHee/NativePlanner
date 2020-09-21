import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert
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
            tableHead: ['분류', 'To do List', '목표', '달성'],
            tableData: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', '']
            ]
        };
        this.loadData = async () => {
            try {
                const jsonTodo = await AsyncStorage.getItem('@todo');
                let json = JSON.parse(jsonTodo);
                alert(json.category);
            } catch (e) {
                console.log(e);
            }
        };
    }

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
                        <Text style={[styles.gaugeText, { paddingLeft: 6 }]}> {'고치'}% </Text>
                    </View>
                </View>
                <View style={[styles.content, { alignItems: 'center', marginTop: 15 }]}>
    
                </View>
                <View style={styles.footer} >
                    <View style={styles.containerTable}>
                        <TouchableOpacity>
                            <Text
                            onPress={() => Alert.alert('결과확인', 'ㅋㅋ', [
                                { 
                                    text:'취소',
                                    onPress: () => this.loadData() 
                                },
                                {
                                    text:'확인'
                                }
                            ])}>
                                결과다</Text>
                        </TouchableOpacity>
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