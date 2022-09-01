/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

// COMPONENT
import AppSlider from './AppSlider';
import AppPicker from '../AppPicker';

// REDUX
import {submitCondition} from '../../reducer/postingSlice';
import {setModalHidden} from '../../reducer/modalSlice';

import API from '../../utils/note';
// CONFIG
import {colors, width, height} from '../../config/globalStyles';
import {
  injurySectionPicker,
  injuryFormPicker,
} from '../../config/injuryPickerList';

const InjurySelect = props => {
  const dispatch = useDispatch();
  const todayDate = useSelector(state => state.posting.todayDate);
  const writtenNote = useSelector(state => state.posting.writtenNote);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);

  const [submitList, setSubmitList] = useState({
    injuryDirection: '왼쪽',
    injurySection: '얼굴',
    injuryForm: '뇌진탕',
    painData: 5,
    interruptData: 5,
    injuryMemo: '',
  });

  // drawer 리스트 UI
  const drawerUI = title => {
    let selectList = [];
    if (title === 'injuryDirection') {
      selectList = ['왼쪽', '오른쪽'];
    } else if (title === 'injurySection') {
      selectList = injurySectionPicker;
    } else if (title === 'injuryForm') {
      selectList = injuryFormPicker;
    }
    return (
      <View style={styles.drawerGroup}>
        <Text style={styles.drawerTitle}>
          {title === 'injuryDirection'
            ? '부상방향'
            : '부상위치' && title === 'injuryForm'
            ? '부상형태'
            : '부상위치'}
        </Text>
        <View
          style={
            Platform.OS === 'ios' ? styles.drawerIos : styles.drawerAndroid
          }>
          <AppPicker
            title={title}
            selectList={selectList}
            submitList={submitList}
            setSubmitList={setSubmitList}
          />
        </View>
      </View>
    );
  };

  // ############ 화면 UI ################
  return (
    <KeyboardAvoidingView
      style={{
        width: '100%',
      }}
      keyboardVerticalOffset={height * 230}
      behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
      enabled>
      <ScrollView
        style={{
          height: '100%',
        }}>
        <View
          style={
            Platform.OS === 'ios'
              ? [styles.drawerSection, {height: height * 200}]
              : [styles.drawerSection, {height: height * 140}]
          }>
          {drawerUI('injuryDirection')}
          {drawerUI('injurySection')}
          {drawerUI('injuryForm')}
        </View>

        <View style={styles.sliderSection}>
          <View style={styles.sliderGroup}>
            <Text style={styles.sliderTitle}>통증정도</Text>
            <AppSlider
              submitList={submitList}
              setSubmitList={setSubmitList}
              title="painData"
            />
          </View>

          <View style={styles.sliderGroup}>
            <Text style={styles.sliderTitle}>운동방해정도</Text>
            <AppSlider
              submitList={submitList}
              setSubmitList={setSubmitList}
              title="interruptData"
            />
          </View>
        </View>

        <View style={styles.memoSection}>
          <Text style={styles.sliderTitle}>메모</Text>
          <TextInput
            size={10}
            scrollEnabled={false}
            multiline={true}
            style={styles.inputHolder}
            placeholder="내용을 입력해주세요"
            returnKeyType="next"
            onChange={event => {
              const {eventCount, target, text} = event.nativeEvent;
              setSubmitList({...submitList, injuryMemo: text});
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={async () => {
            dispatch(setModalHidden());
            dispatch(
              submitCondition({
                userToken: userToken,
                date: todayDate,
                conditionIdx: 'injury',
                content: submitList,
                serverToken: serverToken,
              }),
            );
            // 신체상태 API
            // API.postRecord(
            //   userToken,
            //   todayDate.todayDate,
            //   'injury',
            //   [...writtenNote.noteContentGroup.conditioning.injury, submitList],
            //   serverToken,
            // );
          }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            완료
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    width: '100%',
    flexDirection: 'row',
  },
  sliderSection: {
    width: '100%',
    height: height * 180,
    marginTop: height * 20,
    marginLeft: width * 5,
  },
  memoSection: {
    width: '100%',
    marginTop: height * 20,
    marginLeft: width * 5,
  },
  drawerGroup: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  drawerTitle: {
    backgroundColor: '#ffffff',
    zIndex: 9,
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    position: 'absolute',
    top: height * 45,
    left: width * 10,
  },

  drawerAndroid: {
    position: 'absolute',
    top: height * 70,
  },

  sliderGroup: {
    height: height * 100,
  },
  sliderTitle: {
    backgroundColor: '#ffffff',
    zIndex: 9,
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    paddingLeft: width * 5,
  },
  inputHolder: {
    marginLeft: width * 5,
    marginRight: width * 20,
    marginTop: height * 12,
    lineHeight: 24,
    fontSize: 16,
    color: colors.lightGrey,
  },
  submitButton: {
    borderRadius: 6,
    width: 90,
    height: 24,
    backgroundColor: colors.primary,
    marginTop: height * 40,
    marginBottom: height * 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default InjurySelect;
