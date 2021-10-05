import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FONTS, SIZES, COLORS, images, icons} from '../constants';

const HomeHeader = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding * 2,
          //   marginBottom: 20,
        }}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h1}}>Hello!</Text>
          <Text style={{...FONTS.body2, color: COLORS.gray}}>Chihabeddine</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightGray,
            }}>
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 120,
          borderRadius: 20,
        }}>
        <Image
          source={images.banner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
