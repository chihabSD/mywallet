import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
const FeaturesItems = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 2,
        width: 60,
        alignItems: 'center',
      }}
      onPress={() => console.log(item.description)}>
      <View
        style={{
          height: 50,
          width: 50,
          marginBottom: 5,
          borderRadius: 20,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: item.color,
          }}
        />
      </View>
      <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

export default FeaturesItems;
