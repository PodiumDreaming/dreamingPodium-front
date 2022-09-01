/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors, width, height, fonts} from '../../config/globalStyles';

// REDUX
import {setModalVisible, setModalInner} from '../../reducer/modalSlice';

function EmptyCard({subtitle, title, content, style, idx, ...props}) {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.emptySection}>
        <View style={styles.emptyInnerText}>
          <Text style={{fontFamily: fonts.gmarket, fontWeight: '400'}}>
            입력한 {title} 기록이 없습니다. {'\n'} 오늘의 기록을 남겨주세요 :-)
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            dispatch(
              setModalVisible({
                disableYDrawer: idx === 'injury' ? false : true,
              }),
            );
            dispatch(setModalInner({modalInner: idx}));
          }}>
          <Text style={{fontFamily: fonts.gmarket, fontWeight: '400'}}>
            작성하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptySection: {
    borderRadius: 10,
    backgroundColor: colors.white,
    height: height * 450,
    width: width * 300,
    flexDirection: 'column',
    alignSelf: 'center',
  },
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
    flex: 5,
    flexDirection: 'row',
  },
  savedText: {
    height: 40,
    fontSize: 16,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: colors.borderGrey,
    borderRadius: 20,
    padding: 10,
    marginRight: 4,
    overflow: 'hidden',
    backgroundColor: colors.primary,
    color: colors.white,
  },
  textInputButton: {
    color: colors.lightGrey,
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomButton: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    flex: 1,
    backgroundColor: colors.primary,
    height: height * 450,
    width: width * 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyInnerText: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default EmptyCard;
