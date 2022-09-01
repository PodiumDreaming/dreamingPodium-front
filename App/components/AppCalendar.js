/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import {selectDate, fetchNoteData} from '../reducer/postingSlice';
import {useDispatch, useSelector} from 'react-redux';

import CalendarStrip from 'react-native-calendar-strip';
import {colors} from '../config/globalStyles';

// TOPO : 최적화 시키기

const AppCalendar = () => {
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const dispatch = useDispatch();

  const toggle = selectedDate => {
    dispatch(selectDate({date: selectedDate.toDate().toDateString()}));

    dispatch(
      fetchNoteData({
        user_id: userToken,
        date: selectedDate.toDate().toDateString(),
        serverToken: serverToken,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        selectedDate={dayjs(new Date().getDate())}
        onDateSelected={selectedDate => {
          toggle(selectedDate);
        }}
        scrollable
        style={{
          height: 120,
          paddingTop: 15,
          fontSize: 16,
        }}
        calendarHeaderStyle={styles.innerText}
        dateNumberStyle={styles.innerText}
        dateNameStyle={[styles.dayNameText, {marginBottom: 3}]}
        highlightDateNameStyle={[styles.dayNameText, {marginBottom: 3}]}
        highlightDateNumberStyle={[
          styles.innerText,
          {
            color: colors.white,
            fontSize: 16,
          },
        ]}
        highlightDateNumberContainerStyle={[
          styles.innerText,
          {
            backgroundColor: colors.primary,
            width: 25,
            height: 25,
            borderStyle: 'solid',
            borderRadius: 50,
            justifyContent: 'center',
          },
        ]}
        disabledDateNameStyle={[
          styles.innerText,
          {color: colors.darkGrey},
          {marginBottom: 10},
        ]}
        disabledDateNumberStyle={[styles.innerText, {color: colors.darkGrey}]}
        leftSelector={[]}
        rightSelector={[]}
        innerStyle={{flex: 1.5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderColor: colors.borderGrey,
    // borderBottomWidth: 3,
  },
  innerText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  dayNameText: {
    fontSize: 12,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
});

export default AppCalendar;
AppRegistry.registerComponent('AppCalendar', () => AppCalendar);
