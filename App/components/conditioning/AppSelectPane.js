/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, width, height} from '../../config/globalStyles';

// REDUX
import {submitCondition} from '../../reducer/postingSlice';

function AppSelectPane({title, idx, ...props}) {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const todayDate = useSelector(state => state.posting.todayDate);

  // 생성될 때, content 리스트에서 해당 값 있으면 true로 바꿔주기

  useEffect(() => {
    const filterConditionGroup = () => {
      const conditionGroup = writtenNote.noteContentGroup.conditioning[idx];

      if (conditionGroup !== []) {
        if (conditionGroup.includes(props.children)) {
          setSelect(true);
        }
      }
      return conditionGroup;
    };
    filterConditionGroup(idx);
  }, [idx, props.children, title, todayDate, writtenNote]);

  return (
    <TouchableOpacity
      style={styles.paneSection}
      onPress={() => {
        setSelect(!select);
        dispatch(
          submitCondition({
            userToken: userToken,
            date: todayDate,
            conditionIdx: idx,
            content: props.children,
            serverToken: serverToken,
          }),
        );
      }}>
      <Text
        style={
          select
            ? {
                ...styles.paneText,
                backgroundColor: props.color,
                borderColor: props.color,
                color: 'white',
              }
            : styles.paneText
        }>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  paneSection: {},
  paneText: {
    fontSize: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.borderGrey,
    borderRadius: 19,
    padding: 10,
    marginRight: 4,
    marginTop: 10,
    overflow: 'hidden',
  },
});

export default AppSelectPane;
