import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Pie from 'react-native-pie'

export default class Statisics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        paddingVertical: 15,
                        flexDirection: 'row',
                        width: 350,
                        justifyContent: 'space-between',
                    }}
                >
                    <Pie
                        radius={80}
                        //innerRadius={75}
                        sections={[
                            {
                                percentage: 10,
                                color: '#FFB1B9',
                            },
                            {
                                percentage: 20,
                                color: '#FDE8B7',
                            },
                            {
                                percentage: 30,
                                color: '#BDECB6',
                            },
                            {
                                percentage: 20,
                                color: '#AABBFD',
                            },
                            {
                                percentage: 20,
                                color: '#E7BCF8'
                            }
                        ]}
                        strokeCap={'butt'}
                    /></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', alignItems: 'center' },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
})