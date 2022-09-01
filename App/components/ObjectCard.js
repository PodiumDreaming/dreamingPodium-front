/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {colors, images, width, height} from '../config/globalStyles';
import {ObjectItems} from './ObjectItems';

function ObjectCard({
  multiple = true,
  deleteObjectItem,
  objectValues,
  addObjectItem,
  title,
  onPress,
  maxLength,
  ...props
}) {
  const [showInputBox, setShowInputBox] = useState(false);
  const [text, setText] = useState('');

  const saveText = event => {
    setText(event);
  };

  return (
    <ScrollView style={styles.boxContainer}>
      <View style={styles.addArea}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => {
            setShowInputBox(true);
            onPress();
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={images.addButton}
          />
        </TouchableOpacity>
      </View>

      {showInputBox && (
        <TextInput
          maxLength={maxLength}
          onChangeText={saveText}
          style={styles.inputHolder}
          placeholder="입력해주세요"
          clearTextOnFocus={true}
          autoFocus={true}
          onEndEditing={() => [
            addObjectItem(text),
            setShowInputBox(false),
            setText(''),
          ]}
          onSubmitEditing={() => [
            addObjectItem(text),
            setShowInputBox(false),
            setText(''),
          ]}
        />
      )}

      <ObjectItems
        deleteObjectItem={deleteObjectItem}
        objectValues={objectValues}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    position: 'relative',
    paddingHorizontal: 8,
    marginVertical: 20,
    width: width * 341,
    minHeight: height * 100,
  },

  titleText: {
    fontSize: 18,
    color: colors.textGrey,
    fontWeight: 'bold',
  },

  addArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  addObjectItem: {
    fontSize: 18,
    color: colors.lightGrey,
    fontWeight: 'bold',
  },

  inputHolder: {
    minHeight: height * 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
    marginVertical: 10,
  },
});

export default ObjectCard;
