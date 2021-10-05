import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Header = ({title, onPress, close, islogin}) => {
  if (islogin) {
    return <View />;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2,
      }}>
      <Image
        source={close ? icons.close : icons.back}
        resizeMode="contain"
        style={{width: 15, height: 15, tintColor: 'white'}}
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
