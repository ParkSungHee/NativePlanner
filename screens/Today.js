import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Pie from 'react-native-pie'
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from "@react-native-community/picker";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class Today extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Category: '시간',
            tableHead: ['분류', 'To do List', '목표', '달성'],
            tableData: [
                ['0', '2', '3', '4'],
                ['0', 'b', 'c', 'd'],
                ['0', '2', '3', '4'],
                ['0', 'b', 'c', 'd'],
                ['0', 'x', 'f', 'e'],
                ['0', 'x', 'f', 'e']
            ]
        };
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity>
                <Picker
                        selectedValue={this.state.Category}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Category: itemValue })
                        }>
                        <Picker.Item label="시간" value="time" />
                        <Picker.Item label="분량" value="amount" />
                    </Picker>
            </TouchableOpacity>);
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 1, marginLeft: 6 }}>
                        <Text style={{ fontSize: 20, paddingTop: 13 }}>계획 관리</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 7 }}>
                        <Icon name={'checkmark-outline'} size={35} />
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
                        <Text style={[styles.gaugeText, { paddingLeft: 6 }]}> 60% </Text>
                    </View>
                </View>
                <View style={[styles.content, { alignItems: 'center', marginTop: 15 }]}>
                    <Text style={{ fontSize: 18 }}> 〈 2020년 8월 31일 〉 </Text>
                </View>
                <View style={styles.footer} >
                    <View style={styles.containerTable}>
                        <Table borderStyle={{ borderColor: 'transparent' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell key={cellIndex} data={cellIndex === 0 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
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
    containerTable: { flex: 1, paddingLeft: 15, paddingRight:15 },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row'}
});