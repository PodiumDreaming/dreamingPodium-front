/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';

import {colors, width, height} from '../../config/globalStyles';
import {
  mindSelectList,
  physicalList,
  conditionList,
} from '../../config/conditionSelectList';

// COMPONENT
import AppSelectPane from './AppSelectPane';

// REDUX
import {checkRoutine} from '../../reducer/postingSlice';
import {setModalHidden} from '../../reducer/modalSlice';

// API
import API from '../../utils/note';

function ConditionSelect({title, idx, ...props}) {
  const dispatch = useDispatch();
  const todayDate = useSelector(state => state.posting.todayDate);
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);

  const postCondition = async () => {
    await API.postRecord(
      userToken,
      todayDate,
      'physical',
      {content: writtenNote.noteContentGroup.conditioning.physical},
      serverToken,
    );
    await API.postRecord(
      userToken,
      todayDate,
      'mind',
      {content: writtenNote.noteContentGroup.conditioning.mind},
      serverToken,
    );
  };

  return (
    <View style={Platform.OS === 'android' ? {marginBottom: height * 150} : {}}>
      <View style={styles.titleSection}>
        <Text
          style={{
            ...styles.titleText,
          }}>
          컨디셔닝 리포트
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', right: 0}}
          onPress={() => {
            postCondition();
            dispatch(setModalHidden());
          }}>
          <Text style={styles.submitButton}> 완료 </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.selectSection}>
        <View
          style={{
            width: width * 410,
            paddingRight: 10,
            paddingLeft: 10,
          }}>
          <Text style={styles.subtitleText}>신체 컨디션</Text>
          <Text>
            {physicalList.map(val => {
              if (!val.selectId.includes('f')) {
                return (
                  <AppSelectPane
                    color={colors.lightGreen}
                    idx="physical"
                    key={val.selectId}>
                    {val.selectTitle}
                  </AppSelectPane>
                );
              } else {
                return (
                  <AppSelectPane
                    color={colors.lightGreen}
                    idx="physical"
                    key={val.selectId}>
                    {val.selectTitle}
                  </AppSelectPane>
                );
              }
            })}
          </Text>

          <Text style={{...styles.subtitleText, marginTop: 18}}>
            심리 컨디션
          </Text>
          <Text>
            {mindSelectList.map(val => {
              if (!val.selectId.includes('f')) {
                return (
                  <AppSelectPane
                    color={colors.lightBlue}
                    idx="mind"
                    key={val.selectId}>
                    {val.selectTitle}
                  </AppSelectPane>
                );
              } else {
                return (
                  <AppSelectPane
                    color={colors.lightBlue}
                    idx="mind"
                    key={val.selectId}>
                    {val.selectTitle}
                  </AppSelectPane>
                );
              }
            })}
          </Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    color: colors.textGrey,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  selectSection: {
    flex: 7,
    flexDirection: 'row',
  },
  submitButton: {
    marginRight: 10,
    fontSize: 22,
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default ConditionSelect;
