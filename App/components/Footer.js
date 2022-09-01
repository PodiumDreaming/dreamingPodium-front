/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Modal} from 'react-native';

import {colors, images, width, height, fonts} from '../config/globalStyles';
function ProfileScreen({navigation, ...props}) {
  return (
    <View
      style={{
        flex: 0.7,
        flexDirection: 'row',
        borderTopColor: colors.whiteGrey,
        borderTopWidth: 0.5,
      }}>
      <View
        style={{position: 'absolute', bottom: height * 10, left: width * 15}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={images.dreaming}
            style={{
              width: 15,
              height: 15,
            }}
          />
          <Text
            style={{
              color: colors.primary,
              fontWeight: '500',
              fontSize: 12,
              fontFamily: fonts.spoqaLight,
            }}>
            드리밍포디움
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 3,
            fontSize: 13,
          }}>
          <Text style={{color: colors.primary, fontWeight: '400'}}>
            contact{' '}
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontWeight: '300',
              textAlign: 'right',
              fontFamily: fonts.spoqaLight,
              fontSize: 13,
            }}>
            sujinju0311@naver.com
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;
