/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppCalendar from '../../components/AppCalendar';
import CollapsibleCard from '../../components/training/CollapsibleCard';
import {RoutineItem} from '../../components/training/RoutineItem';
import {checkRoutine} from '../../reducer/postingSlice';
import {noteTitleList} from '../../config/noteTitleList';
import {height, colors} from '../../config/globalStyles';

function TrainingNoteScreen({navigation, route}) {
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const dispatch = useDispatch();

  //TODO : 루틴 불러오기 코드정리
  const filterRoutineGroup = () => {
    if (writtenNote.noteContentGroup.training.routines) {
      const routineGroup = writtenNote.noteContentGroup.training.routines;
      return routineGroup;
    }
  };
  const routineName = filterRoutineGroup() ? filterRoutineGroup() : [];

  const handleRoutineState = async params => {
    Object.keys(routineName).map(async data => {
      if (data === params) {
        dispatch(
          checkRoutine({
            routineName: data,
            userToken: userToken,
            serverToken: serverToken,
          }),
        );
      }
    });
  };

  const filterContentGroup = noteIdx => {
    let trainingNote = writtenNote.noteContentGroup.training;
    trainingNote = {
      ...trainingNote,
    };

    if (trainingNote[noteIdx] && noteIdx !== 'feedback') {
      return trainingNote[noteIdx].content;
    } else if (noteIdx === 'feedback') {
      return writtenNote.noteContentGroup.feedback;
    } else {
      null;
    }
  };

  const filterPhotoGroup = noteIdx => {
    let trainingNote = writtenNote.noteContentGroup.training;
    trainingNote = {
      ...trainingNote,
    };

    if (noteIdx === 'success' || noteIdx === 'failure') {
      return trainingNote[noteIdx].image;
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <AppCalendar />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            filterContentGroup();
          }}
        />
        <View style={styles.alignList}>
          {Object.keys(routineName).map(function (routine, index) {
            return (
              <RoutineItem
                key={routine}
                routine={routine}
                routineState={routineName[routine]}
                onPress={handleRoutineState}
              />
            );
          })}

          {noteTitleList.map(data => {
            return (
              <CollapsibleCard
                key={data.noteIdx}
                noteIdx={data.noteIdx}
                title={data.noteTitle}
                subtitle={data.noteSubtitle}
                placeholder={data.notePlaceholder}
                content={filterContentGroup(data.noteIdx)}
                image={filterPhotoGroup(data.noteIdx)}
                isRoutineComplete={false}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  alignList: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default TrainingNoteScreen;
