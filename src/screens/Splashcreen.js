import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

export default SplashScreen;
