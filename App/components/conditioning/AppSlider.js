/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

// COMPONENT
import Slider from '@react-native-community/slider';
import AppPicker from '../AppPicker';

// CONFIG
import {colors, width, height} from '../../config/globalStyles';

const AppSlider = ({submitList, setSubmitList, title}) => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={
            submitList[title] > 5
              ? [styles.sliderData, {color: '#F78181'}]
              : styles.sliderData
          }>
          {submitList[title]}
        </Text>
        <Slider
          style={{
            width: width * 330,
            height: 50,
          }}
          minimumValue={0}
          maximumValue={10}
          value={submitList[title]}
          step={1}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.lightGrey}
          onValueChange={index => {
            setSubmitList({...submitList, [title]: index});
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderData: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.primary,
  },
});

export default AppSlider;
