import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Pie from 'react-native-pie'
import CalendarStrip from 'react-native-calendar-strip';
import { BarChart, Grid } from 'react-native-svg-charts'

export default class Statisics extends React.PureComponent {
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data = [50,undefined,45,undefined,55,undefined, 20,undefined, 40,undefined, 95,undefined, 100]
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={{ height: 120, paddingTop: 15, paddingBottom: 10 }}
                />
                <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30, left: 10, right: 10 }}>
                    <Grid />
                </BarChart>
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
    }
})