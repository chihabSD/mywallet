import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
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
import Logo from '../components/Logo';
import {COLORS, FONTS, SIZES} from '../constants';
import FormikButton from '../formik/FormikButton';
import FormikInput from '../formik/FormikInput';
import {usePassword} from '../hooks/usePassword';
import CountriesModal from '../Modals/Countries';

const Signup = ({navigation}) => {
  const {passwordVisible, togglePassword} = usePassword();
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    flag: '🇺🇸',
    code: 'US',
    dial_code: '+1',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  const toggleModal = () => setModalVisible(prevState => !prevState);
  const handleSelectedCountries = country => {
    setSelectedCountry(country);
  };
  //   "name": "Tuvalu",
  //   "flag": "🇹🇻",
  //   "code": "TV",
  //   "dial_code": "+688"
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          <Header title="Signup" onPress={() => navigation.navigate('Login')} />
          <Logo />

          <View
            style={{
              marginTop: SIZES.padding * 3,
              marginHorizontal: SIZES.padding * 3,
            }}>
            <FormikInput label="Full name" placeholder="Enter full name" />
            <FormikInput
              isPhone={true}
              label="Phone number"
              toggleModal={toggleModal}
              placeholder="Enter phone number"
              selectedCountry={selectedCountry}
            />

            <FormikInput
              isPassword={true}
              label="Password"
              placeholder="Enter password"
              togglePassword={togglePassword}
              passwordVisible={passwordVisible}
            />
            <FormikButton btnTitle="Continue" />
          </View>
        </ScrollView>
        <CountriesModal
          handleSelectedCountries={handleSelectedCountries}
          toggleModal={toggleModal}
          modalVisible={modalVisible}
        />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;
