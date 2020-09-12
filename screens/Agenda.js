import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import App from '../App';
const testIDs = require('../testIDs');

export default class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        console.log('AgendaScreen props 접근: ', props);
        this.renderItem = this.renderItem.bind(this);
        this.state = {
            items: {},
            date: ''
        };
    }

    componentDidMount() {
        var year = new Date().getFullYear(); //Current Year
        var month = new Date().getMonth() + 1; //Current Month
        var day = new Date().getDay()+1; //Current Day
        this.setState({
            date:
                year + '-' + month + '-' + day
        });
    }

    render() {
        return (
            <Agenda
                testID={testIDs.agenda.CONTAINER}
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={this.date}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
            />
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach((key) => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems,
            });
        }, 1000);
    }

    renderItem(item, firstItemInDay) {
        return (
            <TouchableOpacity
                testID={testIDs.agenda.ITEM}
                style={[styles.item, { height: item.height }]}
                // navigate 해주면 됨. 두번째 파라미터로 데이터 전달 //
                onPress={() => this.props.navigation.navigate('Today', { test: 'test' })}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
});
