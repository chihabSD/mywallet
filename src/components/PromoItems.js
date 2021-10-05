import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {SIZES, COLORS, images} from '../constants';
import {COLORS, FONTS, images, SIZES} from '../constants';
// import {COLORS, images, SIZES} from '../constants';
const PromoItems = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical: SIZES.base,
        width: SIZES.width / 2.5,
      }}
      onPress={() => console.log(item.title)}>
      <View
        style={{
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary,
        }}>
        <Image
          source={images.promoBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </View>

      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={{...FONTS.h4}}>{item.title}</Text>
        <Text style={{...FONTS.body4}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PromoItems;
