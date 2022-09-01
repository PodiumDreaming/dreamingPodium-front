/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CheckButton from '../CheckButton';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {width, height, colors, fonts} from '../../config/globalStyles';

const AppCollapsibleTitle = ({
  style,
  onPress,
  title,
  subtitle,
  content,
  noteIdx,
  placeholder,
  isActive,

  ...props
}) => {
  const todayDate = useSelector(state => state.posting.todayDate);

  const navigation = useNavigation();

  const titleArea = () => {
    // #### content가 없을 경우 글쓰기 스크린으로 이동 합니다 #####
    if (content === null || '') {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.push('WritingScreen', {
              title: title,
              placeholder: placeholder,
              noteIdx: noteIdx,
            });
          }}>
          <View style={styles.boxContainer}>
            <CheckButton
              content={!!content}
              isActive={isActive}
              checkSize={{width: 0, height: 0}}
            />
            <View>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.subtitleText}>{subtitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    // #### Content가 있을 경우 작성한 글 확인. 아래로 펼쳐집니다.  ####
    return (
      <View
        style={
          isActive
            ? [
                styles.boxContainerActive,
                {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: colors.primary,
                },
              ]
            : styles.boxContainer || content
            ? [styles.boxContainerActive, {borderRadius: 13}]
            : styles.boxContainer
        }>
        <CheckButton content={!!content} isActive={isActive} />

        <View>
          <Text
            style={
              isActive ? [styles.titleText, {color: 'white'}] : styles.titleText
            }>
            {title}
          </Text>

          <Text
            style={
              isActive
                ? [styles.subtitleText, {color: 'white'}]
                : styles.subtitleText
            }>
            {subtitle}
          </Text>
        </View>
      </View>
    );
  };

  return <>{titleArea()}</>;
};

const styles = StyleSheet.create({
  boxContainer: {
    paddingHorizontal: 16,
    paddingLeft: 19,
    marginTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 341,
    height: height * 78,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  boxContainerActive: {
    paddingLeft: 19,
    marginTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 341,
    height: height * 65,
  },
  titleText: {
    fontFamily: fonts.spoqaBold,
    fontSize: 18,
    marginBottom: 3,
    color: colors.darkGrey,
  },
  subtitleText: {
    fontFamily: fonts.spoqaRegular,
    fontSize: 13,
    color: colors.lightGrey,
  },
});

export default AppCollapsibleTitle;
