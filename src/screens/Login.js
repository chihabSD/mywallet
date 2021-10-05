import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import {useRedux} from '../hooks/useRedux';
import {authenticate} from '../redux/reducers/login';

const Login = ({navigation}) => {
  const {passwordVisible, togglePassword} = usePassword();
  const {dispatch} = useRedux();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          <Header title="Login" islogin={true} />
          <Logo />

          <View
            style={{
              marginTop: SIZES.padding * 3,
              marginHorizontal: SIZES.padding * 3,
            }}>
            <FormikInput label="Email" placeholder="Enter your eamil" />

            <FormikInput
              isPassword={true}
              label="Password"
              placeholder="Enter password"
              togglePassword={togglePassword}
              passwordVisible={passwordVisible}
            />
            <FormikButton
              btnTitle="Login"
              onPress={() => dispatch(authenticate())}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                color: COLORS.lightGreen,
                //   marginBottom: isPhone ? 5 : null,
                ...FONTS.body3,
              }}>
              Already got an account ? register
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Login;
