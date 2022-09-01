/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import {colors, width, height, fonts} from '../../config/globalStyles';
import {S3Image} from '../../config/injuryPickerList';
import AppXBar from './AppXBar';
// REDUX
import {deleteInjury} from '../../reducer/postingSlice';
import InjurySVG from '../InjurySVG';

function FullInjury({subtitle, title, content, style, idx, data, ...props}) {
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const todayDate = useSelector(state => state.posting.todayDate);
  const serverToken = useSelector(state => state.user.serverToken);
  const userToken = useSelector(state => state.user.userToken);
  const dispatch = useDispatch();

  const filterConditionGroup = idx => {
    const conditionGroup = writtenNote.noteContentGroup.conditioning[idx];
    return conditionGroup;
  };

  return (
    <>
      {filterConditionGroup(idx) && (
        <>
          <InjurySVG injury={data.injurySection} />

          <View style={styles.section}>
            <TouchableOpacity style={styles.savedTextArea}>
              <View style={{flexDirection: 'row'}}>
                {data.injurySection !== '기타' ? (
                  <Image
                    style={{width: 80, height: 50}}
                    source={{
                      uri: `https://wright-images.s3.ap-northeast-2.amazonaws.com/front_injury/${S3Image(
                        data.injurySection,
                      )}.png`,
                    }}
                  />
                ) : (
                  <View style={{width: 30}} />
                )}

                <Text style={{...styles.title}}>
                  {data.injuryDirection} {data.injurySection} {data.injuryForm}
                </Text>
              </View>

              <View style={{...styles.degreeGroup, marginBottom: 5}}>
                <Text style={styles.degreeTitle}>통증정도</Text>
                <AppXBar amount={data.painData} />
                <Text style={styles.degreeNumber}>{data.painData}</Text>
              </View>
              <View style={styles.degreeGroup}>
                <Text style={styles.degreeTitle}>운동방해정도</Text>
                <AppXBar amount={data.interruptData} />
                <Text style={styles.degreeNumber}>{data.interruptData}</Text>
              </View>

              <ScrollView style={styles.scrollMemo}>
                <TouchableWithoutFeedback style={styles.memoSection}>
                  <Text style={styles.memoContent}>{data.injuryMemo}</Text>
                </TouchableWithoutFeedback>
              </ScrollView>

              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    deleteInjury({
                      userToken: userToken,
                      todayDate: todayDate,
                      injuryDirection: data.injuryDirection,
                      injurySection: data.injurySection,
                      injuryForm: data.injuryForm,
                      injuryMemo: data.injuryMemo,
                      interruptData: data.interruptData,
                      painData: data.painData,
                      serverToken: serverToken,
                    }),
                  );
                }}
                style={styles.deleteButton}>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.white,
                  }}>
                  부상 삭제
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  graphColors: {
    backgroundColor: colors.primary,
    height: height * 13,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  graphFull: {
    backgroundColor: colors.primary,
    height: height * 13,
    borderRadius: 7,
  },
  graph: {
    width: width * 170,
    height: height * 15,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#E3E3E3',
    backgroundColor: '#E3E3E3',
  },
  section: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? height * 25 : height * 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    height: Platform.OS === 'android' ? height * 220 : height * 230,
    width: width * 310,
    alignSelf: 'center',
  },

  savedTextArea: {
    flexDirection: 'column',
    height: '100%',
    width: width * 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textGrey,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'flex-end',
    paddingRight: 3,
  },
  degreeGroup: {
    flexDirection: 'row',
  },
  degreeTitle: {
    fontSize: 16,
    color: colors.lightGrey,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  degreeNumber: {
    position: 'absolute',
    right: width * 2,
    fontSize: 16,
    color: colors.lightGrey,
    fontWeight: 'bold',
  },
  scrollMemo: {
    width: 270,
    marginTop: 20,
  },
  memoContent: {
    fontSize: 15,
    color: colors.textGrey,
    marginLeft: width * 10,
  },
  deleteButton: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: colors.primary,
    height: height * 40,
    width: width * 310,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullInjury;
