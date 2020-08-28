import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, ToastAndroid } from 'react-native';
import { LocaleConfig, CalendarList } from 'react-native-calendars';


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

LocaleConfig.locales['fr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


export default class HomeScreen extends Component {
    render() {
        return (
            <CalendarList style={styles.calendar}
                current={Date()}
                horizontal={true}
                pagingEnabled={true} //페이지처럼 넘길지
                pastScrollRange={1}
                futureScrollRange={50}
                scrollEnabled={true}
                showScrollIndicator={false} //vertical scroll indicator를 활성화 시킬 지 
                calendarHeight={chartHeight}
                calendarWidth={chartWidth}
                monthFormat={'yyyy년 MM월'}
                hideArrows={true}
                hideExtraDays={false}
                disableMonthChange={false}
                onDayPress={(day) => {
                    console.log('selected day', day)
                    ToastAndroid.showWithGravity(
                        day.dateString,
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                }} //변경하기 *
                markedDates={{
                    '2020-08-21': { marked: true },
                    '2020-08-22': { marked: true, dotColor: 'red', activeOpacity: 0 }
                }}
            />
        );
    }
}


const styles = StyleSheet.create({
    calendar: {
        marginTop: 5
    }
});