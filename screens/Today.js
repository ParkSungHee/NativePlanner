import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Picker
} from 'react-native'
import Pie from 'react-native-pie'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Today extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 1, marginLeft:6 }}>
                        <Text style={{ fontSize: 20, paddingTop: 13 }}>계획 관리</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end', marginRight:7 }}>
                        <Icon name={'checkmark-outline'} size={35}  />
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
            <View style={[styles.content, {  alignItems: 'center' ,marginTop: 7 }]}>
                <Text style={{ fontSize: 18 }}> 〈 2020년 8월 31일 〉 </Text>
            </View>
            <View style={[styles.footer, { marginTop: 15, margin: 10 }]} >

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
    title: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#eee',
        borderBottomWidth: 0.5,
        padding: 5,
    },
    headertitle: {
        flex: 3
    },
    content: {
        flex: 1
    },
    footer: {
        flex: 6
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
    table: {
        borderWidth: 1,
        color: '#111111'
    },

})