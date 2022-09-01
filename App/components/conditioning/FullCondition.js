/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, width, height, fonts} from '../../config/globalStyles';

// REDUX
import {setModalVisible, setModalInner} from '../../reducer/modalSlice';

// import EmptyCard from '../../components/conditioning/EmptyCard';

function FullCondition({subtitle, title, content, style, idx, ...props}) {
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const todayDate = useSelector(state => state.posting.todayDate);
  const dispatch = useDispatch();

  const filterConditionGroup = () => {
    const conditionGroup = writtenNote.noteContentGroup.conditioning[idx];

    if (conditionGroup.length !== 0) {
      return writtenNote.noteContentGroup.conditioning[idx];
    } else {
      return [];
    }
  };

  const savedTextUI = () => {
    if (filterConditionGroup() !== undefined) {
      return filterConditionGroup().map((data, index) => {
        return (
          <>
            <View key={data} style={styles.paneUI}>
              <Text style={styles.savedText} key={index}>
                {data}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginVertical: 10,
                  height: 2,
                  backgroundColor: '#EEEEEE',
                  width: width * 320,
                }}
              />
            </View>
          </>
        );
      });
    } else {
      return <></>;
    }
  };

  return (
    <>
      <View style={styles.section}>
        {title && (
          <Text style={style ? [styles.titleText, style] : styles.titleText}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text style={styles.subTitle}>오늘의 {subtitle} 컨디션은</Text>
        )}

        <TouchableOpacity
          onPress={() => {
            dispatch(
              setModalVisible({
                disableYDrawer: idx === 'injury' ? false : true,
              }),
            );
            dispatch(setModalInner({modalInner: 'condition'}));
          }}
          style={styles.savedTextArea}>
          {filterConditionGroup().length > 0 ? (
            savedTextUI()
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  setModalVisible({
                    disableYDrawer: idx === 'injury' ? false : true,
                  }),
                );
                dispatch(setModalInner({modalInner: 'condition'}));
              }}>
              <Text style={styles.textInputButton}>입력해 주세요</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  section: {
    borderRadius: 10,
    backgroundColor: colors.white,
    width: '90%',
    minHeight: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 10,
    color: 'black',
  },
  savedTextArea: {
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 10,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: width * 15,
  },
  savedText: {
    fontFamily: fonts.spoqaRegular,
    color: 'black',
    fontSize: 16,
  },
  textInputButton: {
    color: colors.lightGrey,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FullCondition;
