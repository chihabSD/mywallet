import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const FormikButton = ({btnTitle}) => {
  return (
    <View style={{marginTop: SIZES.padding * 3}}>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: COLORS.black,
          borderRadius: SIZES.radius / 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.lightGreen,
            //   marginBottom: isPhone ? 5 : null,
            ...FONTS.body3,
          }}>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormikButton;
