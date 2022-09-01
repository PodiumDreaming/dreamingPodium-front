/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import {colors, width, height} from '../../config/globalStyles';

// REDUX
import {setModalVisible, setModalInner} from '../../reducer/modalSlice';

import EmptyCard from './EmptyCard';
import FullCondition from './FullCondition';
import AppSwiper from '../AppSwiper';
import FullInjury from './FullInjury';

function ConditionCard({subtitle, title, content, style, idx, ...props}) {
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const todayDate = useSelector(state => state.posting.todayDate);
  const dispatch = useDispatch();

  const filterConditionGroup = param => {
    const conditionGroup = writtenNote.noteContentGroup.conditioning[param];

    return conditionGroup;
  };

  const injurySwiperItems = param => {
    if (filterConditionGroup(param) !== []) {
      return filterConditionGroup(param).map((data, index) => {
        return (
          <>
            <FullInjury title="부상" idx="injury" data={data} />
          </>
        );
      });
    }
  };

  const isEmpty = () => {
    if (
      filterConditionGroup('mind').length > 0 ||
      filterConditionGroup('physical').length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      {idx === 'injury' ? (
        filterConditionGroup(idx).length > 0 ? (
          <>
            <TouchableOpacity
              style={styles.injuryPlusButton}
              onPress={() => {
                dispatch(
                  setModalVisible({
                    disableYDrawer: 'injury',
                  }),
                );
                dispatch(setModalInner({modalInner: idx}));
              }}>
              <Text style={{color: 'white'}}>부상 추가하기</Text>
            </TouchableOpacity>
            <AppSwiper swiperItems={injurySwiperItems(idx)} />
          </>
        ) : (
          <>
            <EmptyCard title="부상" idx="injury" />
          </>
        )
      ) : !isEmpty() ? (
        <ScrollView style={{flex: 1}}>
          <FullCondition subtitle="신체" idx="physical" />
          <FullCondition subtitle="심리" idx="mind" />
        </ScrollView>
      ) : (
        <EmptyCard title="컨디션" idx="condition" />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
    color: colors.darkGrey,
  },
  savedTextArea: {
    marginVertical: 6,
    paddingLeft: 6,
    marginLeft: 10,
  },
  savedText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.primary,
  },
  textInputButton: {
    color: colors.lightGrey,
    fontSize: 14,
    fontWeight: 'bold',
  },
  injuryPlusButton: {
    position: 'absolute',
    zIndex: 9,
    right: width * 18,
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.primary,
    width: width * 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ConditionCard;
