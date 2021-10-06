import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {colors, images, width, height} from '../config/globalStyles';

function DreamObjectCard({multiple = true, ...props}) {
  const [showAddButton, setShowAddButton] = useState(true);

  // add button UI 제어
  const addButton = showAddButton ? '추가' : '완료';

  const [text, setText] = useState('');
  const saveText = event => {
    setText(event);
  };

  return (
    <View>
      <View style={styles.boxContainer}>
        <View>
          <Text style={styles.titleText}>{props.title}</Text>

          <View style={styles.addArea}>
            <TouchableOpacity
              style={styles.addButtonUI}
              onPress={
                showAddButton
                  ? () => {
                      setShowAddButton(false);
                    }
                  : () => {
                      [
                        props.handleAddText(text),
                        setShowAddButton(true),
                        setText(''),
                      ];
                    }
              }>
              <Text style={styles.handleAddText}>{addButton}</Text>
            </TouchableOpacity>

            {showAddButton ? (
              <></>
            ) : (
              <TextInput
                onChangeText={saveText}
                style={styles.inputHolder}
                placeholder="입력해주세요"
                clearTextOnFocus={true}
                autoFocus={true}
                onSubmitEditing={() => [
                  props.handleAddText(text),
                  setShowAddButton(true),
                  setText(''),
                ]}
              />
            )}
          </View>

          {/* 작성된 리스트 UI */}
          <View style={{alignItems: 'center'}}>
            {props.state ? (
              props.state.map((data, index, _source) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      width: '100%',
                      position: 'relative',
                    }}>
                    <Text style={styles.savedText}>{data}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        props.deleteListButton(data, props.state);
                      }}
                      style={styles.deleteButton}>
                      <Text>삭제</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <Text>empty</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    position: 'relative',
    paddingHorizontal: 16,
    marginVertical: 20,
    width: width * 341,
    minHeight: height * 120,

    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowRadius: 2.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // android
    elevation: 3,
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.lightGrey,
    marginVertical: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  savedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  addArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 23,
    width: '100%',
  },

  addButtonUI: {
    position: 'absolute',
    left: 0,
  },

  handleAddText: {
    fontSize: 18,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },

  inputHolder: {
    width: width * 220,
    minHeight: height * 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    textAlign: 'center',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
  },
});

export default DreamObjectCard;