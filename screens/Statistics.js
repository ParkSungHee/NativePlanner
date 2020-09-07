import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Pie from 'react-native-pie'
import CalendarStrip from 'react-native-calendar-strip';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

export default class Statisics extends React.PureComponent {
    render() {
        const day = ["일", undefined, "월", undefined, "화", undefined, "수", undefined, "목", undefined, "금", undefined, "토"]
        const fill = 'rgb(134, 65, 244)'
        const data = [50, undefined, 45, undefined, 55, undefined, 20, undefined, 40, undefined, 95, undefined, 100]
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={{ height: 90, paddingTop: 15 }}
                />
                <BarChart
                    style={{ height: 200, width: 380, marginLeft: 15 }}
                    data={data} svg={{ fill }}
                    contentInset={{ top: 10, bottom: 30, left: 10, right: 10 }}
                    gridMin={0}
                >
                    <Grid />
                </BarChart>
                <XAxis
                    style={{ marginHorizontal: 30, marginVertical: -20 }}
                    data={data}
                    formatLabel={(value, index) => day[index]}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
                <View style={styles.content}>
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
    container: {
        flex: 1
    },
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
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },
    content: {
        marginTop: 30,
        height: 160,
        alignItems: 'center'
    }
})