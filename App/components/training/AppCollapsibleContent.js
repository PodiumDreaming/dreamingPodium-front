/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {width, height, colors, fonts, images} from '../../config/globalStyles';
import Swiper from 'react-native-swiper';

import {useNavigation} from '@react-navigation/native';

const AppCollapsibleContent = ({
  style,
  onPress,
  isActive,
  content,
  image,
  noteIdx,
  ...props
}) => {
  const navigation = useNavigation();

  const imageGroup = () => {
    if (image !== null) {
      return image.map(data => {
        return (
          <Image
            key={data}
            source={{uri: data}}
            resizeMode="contain"
            resizeMethod="auto"
            style={{...styles.swiperItem}}
          />
        );
      });
    }
  };

  const contentArea = () => {
    return (
      <View
        style={
          isActive
            ? [styles.contentSection, styles.contentActive]
            : styles.contentSection
        }>
        {/* 가로줄 */}
        <View
          style={{
            borderTopColor: colors.white,
            borderTopWidth: 1,
          }}
        />
        {image !== null && image.length > 0 && (
          <Swiper
            activeDotColor={colors.white}
            paginationStyle={{bottom: 0}}
            height={300}
            style={styles.swiperWrapper}
            showsButtons={false}>
            {imageGroup()}
          </Swiper>
        )}

        <Text multiline={true} style={styles.text}>
          {content}
        </Text>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.push('WritingScreen', {
              value: content,
              noteIdx: noteIdx,
            });
          }}>
          <Text
            style={{
              color: colors.primary,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 12,
            }}>
            수정하기
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <>{contentArea()}</>;
};

const styles = StyleSheet.create({
  swiperWrapper: {marginTop: 15},
  swiperItem: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 300,
    height: height * 300,
  },

  text: {
    fontFamily: fonts.spoqaLight,
    paddingTop: 16,
    fontSize: 16,
    lineHeight: 22,
    backgroundColor: colors.primary,
    color: colors.white,
  },

  contentSection: {
    padding: 15,
    flexDirection: 'column',
    flexShrink: 1,
    width: width * 341,
    borderStyle: 'solid',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.primary,
  },

  // TODO : 스타일 디테일 수정하기
  contentActive: {
    backgroundColor: colors.primary,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 1.65,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    // android
    elevation: 3,
  },
  dropButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },

  submitButton: {
    marginTop: 10,
    borderRadius: 8,
    width: 62,
    height: 24,
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default AppCollapsibleContent;
