import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import {colors, images, width} from '../config/globalStyles';

function ObjectItems({deleteObjectItem, objectValues, ...props}) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <View>
      {objectValues ? (
        objectValues.map((data, index, _source) => {
          return (
            <TouchableOpacity
              key={data}
              onPress={() => {
                setShowDelete(data);
              }}>
              <View style={styles.savedTextArea} key={index}>
                <Text style={styles.savedText}>{data}</Text>

                {/* 삭제 버튼 */}
                {showDelete === data && (
                  <TouchableOpacity
                    onPress={() => {
                      deleteObjectItem(data, objectValues);
                    }}
                    style={styles.deleteArea}>
                    <Image
                      style={styles.deleteButton}
                      source={images.closeButton}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text>empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  savedTextArea: {
    borderBottomWidth: 2,
    borderBottomColor: colors.borderGrey,
    borderStyle: 'solid',
    marginVertical: 10,
    paddingLeft: 6,
    width: width * 325,
    height: width * 30,
  },
  savedText: {
    fontSize: 18,
    color: colors.textGrey,
  },

  deleteButton: {
    tintColor: colors.darkGrey,
  },

  deleteArea: {
    position: 'absolute',
    right: 0,
  },
});

export {ObjectItems};
