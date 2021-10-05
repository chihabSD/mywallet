import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const Logo = ({title}) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: COLORS.lightGreen,
          ...FONTS.h1,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Logo;
