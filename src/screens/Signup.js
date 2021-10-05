import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  FlatList,
  Image,
  Platform,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {COLORS, FONTS} from '../constants';

const Signup = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          <Header title="Signup" />
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;
