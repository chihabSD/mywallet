import React, {useState} from 'react';
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

const Signup = ({navigation}) => {
  const {passwordVisible, togglePassword} = usePassword();
  const [selectedArea, setSelectedArea] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          <Header title="Signup" />
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
              placeholder="Enter phone number"
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
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;
