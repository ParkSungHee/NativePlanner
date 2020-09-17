import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Table, TableWrapper, Cell, Col, Cols } from 'react-native-table-component';
export default class ToDo extends Component {
    constructor(props) {
        super(props);

        const elementButton = (value) => (
            <TouchableOpacity>
                <Icon
                    name={'checkmark-outline'}
                    size={35}
                    onPress={() => Alert.alert('선택하십시오', '', [
                        { text: '시간', onPress: () => console.log('시간') },
                        { text: '분량', onPress: () => console.log('분량') }
                    ])} />
            </TouchableOpacity>
        );

        this.state = {
            tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
            tableData: [
                [elementButton('1'), 'a', 'b', 'c', 'd'],
                [elementButton('2'), '1', '2', '3', '4'],
                [elementButton('3'), 'a', 'b', 'c', 'd']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 7 }}>
                    <TouchableOpacity>
                        <Icon
                            name={'checkmark-outline'}
                            size={35}
                            onPress={() => Alert.alert('저장하시겠습니까?', '', [
                                { text: '취소', onPress: () => console.log('취소') },
                                { text: 'Ok', onPress: () => console.log('Ok') }
                            ])} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 8, margin: 60 }}>
                    <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1 }}>
                        {/* Left Wrapper */}
                        <TableWrapper style={{ width: 80 }}>
                            <Cell data="" style={styles.singleHead} />
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Col data={['H1', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
                                <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
                            </TableWrapper>
                        </TableWrapper>

                        {/* Right Wrapper */}
                        <TableWrapper style={{ flex: 1 }}>
                            <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>

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
    singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
    head: { flex: 1, backgroundColor: '#c8e1ff' },
    title: { flex: 2, backgroundColor: '#f6f8fa' },
    titleText: { marginRight: 6, textAlign: 'right' },
    text: { textAlign: 'center' },
    btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
    btnText: { textAlign: 'center' }
});