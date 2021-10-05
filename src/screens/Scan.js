import React from 'react';
import {View, Text} from 'react-native';

import {FONTS} from '../constants';
const Scan = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{...FONTS.body1}}> Testing the app </Text>
    </View>
  );
};

export default Scan;
