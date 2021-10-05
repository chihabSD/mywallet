import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {specialPromoData} from '../helpers/data';
import HomeHeader from './HomeHeader';
// import {specialPromoData} from '../helpers/data';
import PromoItems from './PromoItems';

const Promos = () => {
  return (
    <FlatList
      ListHeaderComponent={HomeHeader}
      contentContainerStyle={{paddingHorizontal: SIZES.padding * 3}}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={specialPromoData}
      keyExtractor={item => `${item.id}`}
      renderItem={PromoItems}></FlatList>
  );
};

export default Promos;
