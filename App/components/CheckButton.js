/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {width, height, colors, images} from '../config/globalStyles';

const CheckButton = ({
  style,
  onPress,
  isActive,
  checkSize,
  content,
  ...props
}) => {
  return (
    <View
      style={
        isActive
          ? [styles.checkbox, {borderColor: colors.white}]
          : styles.checkbox
      }>
      <Image
        style={
          content
            ? {width: 13, height: 10, tintColor: colors.primary}
            : [styles.unchecking, checkSize]
        }
        source={images.check}
      />
    </View>
  );
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
    // backgroundColor: colors.primary,
  },

  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: colors.primary,
    borderWidth: 1.5,
    width: 10,
    height: 10,
    padding: 10,
    marginRight: 23,
  },
  unchecking: {
    tintColor: colors.lightGrey,
    opacity: 0.5,
    width: 0,
    height: 0,
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    color: colors.darkGrey,
  },
  subtitleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
});

export default CheckButton;
