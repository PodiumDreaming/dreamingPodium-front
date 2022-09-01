/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';

import {colors, width, height} from '../config/globalStyles';

var PickerItem = Picker.Item;

const AppPicker = ({
  selectList,
  submitList,
  setSubmitList,
  title,
  ...props
}) => {
  const [selectedItem, setSelectItem] = useState(selectList[0]);

  return (
    <View>
      <Picker
        style={{width: width * 130}}
        lineColor="#000000"
        lineGradientColorFrom="#008000"
        lineGradientColorTo="#FF5733"
        selectedValue={selectedItem}
        itemStyle={{color: 'black', fontSize: 18, width: '100%'}}
        onValueChange={index => {
          setSelectItem(index);
          setSubmitList({...submitList, [title]: index});
        }}
        mode="dropdown">
        {selectList.map((value, i) => (
          <PickerItem label={value} value={value} key={i} />
        ))}
      </Picker>
    </View>
  );
};

export default AppPicker;
