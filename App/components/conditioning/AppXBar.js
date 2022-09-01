/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, width, height} from '../../config/globalStyles';

function AppXBar({amount, ...props}) {
  const graphUI = () => {
    if (amount === 0) {
      return <View style={{...styles.graphColors, width: 0}} />;
    } else if (amount === 10) {
      return <View style={{...styles.graphFull, width: width * 169}} />;
    } else {
      return (
        <View style={{...styles.graphColors, width: width * 17 * amount}} />
      );
    }
  };
  return (
    <>
      <View style={{position: 'absolute', right: width * 25}}>
        <View style={styles.graph}>{graphUI()}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  graphColors: {
    backgroundColor: colors.primary,
    height: height * 10,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  graphFull: {
    backgroundColor: colors.primary,
    height: height * 10,
    borderRadius: 7,
  },
  graph: {
    width: width * 170,
    height: height * 12,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#E3E3E3',
    backgroundColor: '#E3E3E3',
  },
});

export default AppXBar;
