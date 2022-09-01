/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppCalendar from '../../components/AppCalendar';
import ConditionCard from '../../components/conditioning/ConditionCard';
import AppModal from '../../components/AppModal';
import ConditionSelect from '../../components/conditioning/ConditionSelect';
import InjurySelect from '../../components/conditioning/InjurySelect';
import {colors, width, height} from '../../config/globalStyles';

function ConditioningNoteScreen(props) {
  const [selectTab, setSelectTab] = useState('condition');
  const modalInner = useSelector(state => state.modal.modalInner);

  const modalInnerScreen = () => {
    switch (modalInner) {
      case 'condition':
        return <ConditionSelect title="컨디션" idx="condition" />;

      case 'injury':
        return <InjurySelect title="부상" idx="injury" />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <AppCalendar />
      <View style={styles.selectTabGroup}>
        <TouchableOpacity
          style={
            selectTab === 'condition'
              ? [styles.selectTab, {backgroundColor: '#EEEEEE'}]
              : styles.selectTab
          }
          onPress={() => {
            setSelectTab('condition');
          }}>
          <Text
            style={
              selectTab === 'condition'
                ? [styles.selectedText, {marginLeft: 12}]
                : styles.selectText
            }>
            컨디션리포트
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectTab === 'injury'
              ? [{backgroundColor: '#EEEEEE'}, styles.selectTab]
              : styles.selectTab
          }
          onPress={() => {
            setSelectTab('injury');
          }}>
          <Text
            style={
              selectTab === 'injury' ? [styles.selectedText] : styles.selectText
            }>
            부상리포트
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainer}>
        {selectTab === 'condition' ? (
          <View style={{height: height * 500}}>
            <ConditionCard idx="mind" />
          </View>
        ) : (
          <>
            {/* 부상일때 */}
            <View
              style={{
                minHeight: height * 500,
                height: '100%',
                flex: 1,
              }}>
              <ConditionCard title="부상" idx="injury" />
            </View>
          </>
        )}
      </View>

      <AppModal>{modalInnerScreen()}</AppModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    height: '100%',
    minHeight: height * 100,
    backgroundColor: '#EEEEEE',
    paddingTop: 10,
  },
  selectTabGroup: {
    paddingTop: 10,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
  },
  selectTab: {
    marginRight: 1,
    // marginLeft: 12,
    width: width * 120,
    height: height * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EEEEEE',
  },
  selectText: {fontSize: 18, fontWeight: 'bold', color: colors.lightGrey},
  selectedText: {fontSize: 18, fontWeight: 'bold', color: '#000000'},
});

export default ConditioningNoteScreen;
