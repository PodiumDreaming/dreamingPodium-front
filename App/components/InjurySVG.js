/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import {colors, width, height} from '../config/globalStyles';

import Head from '../assets/svg/head';
import Face from '../assets/svg/Face';
import Belly from '../assets/svg/belly';
import Wrist from '../assets/svg/rightWrist';
import Waist from '../assets/svg/waist';
import Thigh from '../assets/svg/rightThigh';
import Neck from '../assets/svg/neck';
import Rib from '../assets/svg/rib';

function InjurySVG({injury, ...props}) {
  const svg = () => {
    switch (injury) {
      case '머리':
        return <Head width={300} height={350} />;
      case '얼굴':
        return <Face width={300} height={350} />;
      case '허리':
        return <Waist width={300} height={350} />;
      case '손목':
        return <Wrist width={300} height={350} />;
      case '허벅지':
        return <Thigh width={300} height={350} />;
      case '목':
        return <Neck width={300} height={350} />;
      case '갈비뼈':
        return <Rib width={300} height={350} />;
      case '배':
        return <Belly width={300} height={350} />;

      default:
        return <></>;
    }
  };
  return (
    <>
      <View style={styles.rootContainer}>{svg()}</View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    zIndex: 99,
    position: 'absolute',
    bottom: height * 200,
    alignSelf: 'center',
  },
});

export default InjurySVG;