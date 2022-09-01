/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';

import {colors, width, height} from '../config/globalStyles';

import Head from '../assets/svg/head';
import Face from '../assets/svg/Face';
import Belly from '../assets/svg/belly';
import Waist from '../assets/svg/waist';
import Neck from '../assets/svg/neck';
import Rib from '../assets/svg/rib';

import Arm from '../assets/svg/arm';
import Thigh from '../assets/svg/Thigh';
import Elbow from '../assets/svg/elbow';
import Pelvis from '../assets/svg/pelvis';
import Shoulder from '../assets/svg/shoulder';
import Wrist from '../assets/svg/wrist';
import Hand from '../assets/svg/hand';
import Finger from '../assets/svg/finger';
import Shin from '../assets/svg/shin';
import Achilles from '../assets/svg/achilles';
import Ankle from '../assets/svg/ankle';
import Foot from '../assets/svg/foot';
import Knee from '../assets/svg/knee';

function InjurySVG({injury, ...props}) {
  const svg = () => {
    switch (injury) {
      case '머리':
        return <Head width={width * 350} height={height * 330} />;
      case '얼굴':
        return <Face width={width * 350} height={height * 330} />;
      case '허리':
        return <Waist width={width * 350} height={height * 330} />;
      case '손목':
        return <Wrist width={width * 350} height={height * 330} />;
      case '허벅지':
        return <Thigh width={width * 350} height={height * 330} />;
      case '목':
        return <Neck width={width * 350} height={height * 330} />;
      case '갈비뼈':
        return <Rib width={width * 350} height={height * 330} />;
      case '배':
        return <Belly width={width * 350} height={height * 330} />;
      case '골반':
        return <Pelvis width={width * 350} height={height * 330} />;
      case '팔':
        return <Arm width={width * 350} height={height * 330} />;
      case '팔꿈치':
        return <Elbow width={width * 350} height={height * 330} />;
      case '어깨':
        return <Shoulder width={width * 350} height={height * 330} />;
      case '손':
        return <Hand width={width * 350} height={height * 330} />;
      case '손가락':
        return <Finger width={width * 350} height={height * 330} />;
      case '정강이':
        return <Shin width={width * 350} height={height * 330} />;
      case '아킬레스건':
        return <Achilles width={width * 350} height={height * 330} />;
      case '발목':
        return <Ankle width={width * 350} height={height * 330} />;
      case '발':
        return <Foot width={width * 350} height={height * 330} />;
      case '무릎':
        return <Knee width={width * 350} height={height * 330} />;

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
    bottom: Platform.OS === 'android' ? height * 218 : height * 210,
    alignSelf: 'center',
  },
});

export default InjurySVG;
