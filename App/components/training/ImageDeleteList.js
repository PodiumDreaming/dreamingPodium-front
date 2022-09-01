/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {colors, width, height, fonts} from '../../config/globalStyles';

function ImageDeleteList({
  navigation,
  route,
  NoteList,
  noteIdx,
  handleDeleteImage,
  ...props
}) {
  return (
    <>
      {/* 이미지 삭제 리스트 */}
      <Text
        style={{
          flexDirection: 'row',
          width: width * 350,
        }}>
        <View>
          {noteIdx !== 'feedback' && noteIdx !== 'train_detail' && NoteList && (
            <Text
              style={{
                alignSelf: 'flex-start',
              }}>
              {NoteList.map(data => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleDeleteImage(data);
                    }}
                    key={data}>
                    <Image
                      source={{uri: data}}
                      resizeMode="cover"
                      resizeMethod="auto"
                      style={styles.imageList}
                    />
                  </TouchableOpacity>
                );
              })}
            </Text>
          )}
        </View>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  input: {
    flex: 1,
    fontFamily: fonts.spoqaLight,
    width: width * 343,
    fontSize: 15,
    lineHeight: 25,
    padding: 13,
  },
  inputBox: {
    minHeight: height * 270,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: colors.primary,
    fontSize: 13,
    lineHeight: 25,
  },
  submitButton: {
    fontFamily: fonts.spoqaRegular,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: 62,
    height: 24,
    backgroundColor: colors.primary,
    fontSize: 8,
    justifyContent: 'center',
  },
  submitText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  imageList: {width: width * 70, height: height * 70},
});

export default ImageDeleteList;
