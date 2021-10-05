import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Header = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2,
      }}>
      <Image
        source={icons.back}
        resizeMode="contain"
        style={{width: 20, height: 20, tintColor: 'white'}}
      />

      <Text
        style={{
          marginLeft: SIZES.padding * 1.5,
          color: COLORS.white,
          ...FONTS.h4,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Header;
