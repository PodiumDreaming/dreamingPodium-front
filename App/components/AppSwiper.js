import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {width, height} from '../config/globalStyles';

const {width: screenWidth} = Dimensions.get('window');

const AppSwiper = props => {
  const [entries, setEntries] = useState([props.swiperItems]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(props.swiperItems);
  }, [props.swiperItems]);

  const renderItem = ({item, index}, parallaxProps) => {
    return <View style={styles.item}>{item}</View>;
  };
  return (
    <View style={[styles.container]}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={600}
        itemWidth={screenWidth - 90}
        data={entries}
        renderItem={renderItem}
        parallaxFactor={0.1}
      />
    </View>
  );
};

export default AppSwiper;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  item: {
    width: screenWidth - 60,
    height: height * 500,
    alignSelf: 'center',
  },
});
