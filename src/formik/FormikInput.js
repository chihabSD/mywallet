import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const FormikInput = ({
  label,
  placeholder,
  isPhone,
  isPassword,
  passwordVisible,
  togglePassword,
  toggleModal,
  selectedCountry,
}) => {
  return (
    <View style={{marginTop: SIZES.padding * 3}}>
      <Text
        style={{
          color: COLORS.lightGreen,
          //   marginBottom: isPhone ? 5 : null,
          ...FONTS.body3,
        }}>
        {label}
      </Text>

      {/* {isPassword ? <Text>Passowrd</Text> : null} */}
      {isPhone ? (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              width: 100,

              height: 50,
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
              flexDirection: 'row',
              ...FONTS.body2,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.down}
                resizeMode="contain"
                style={{width: 10, height: 10, tintColor: 'white'}}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                marginLeft: 5,
                // height: 30,
                // alignItems: 'center',
                paddingTop: 5,
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  color: COLORS.lightGreen,
                  marginBottom: isPhone ? 5 : null,
                  ...FONTS.body1,
                  alignSelf: 'center',
                }}>
                {selectedCountry.flag}
              </Text>
              {/* <Image
                source={images.usFlag}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              /> */}
            </View>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Text
                style={{
                  color: COLORS.lightGreen,
                  marginBottom: isPhone ? 5 : null,
                  ...FONTS.body3,
                }}>
                {selectedCountry.dial_code}
              </Text>
            </View>
          </TouchableOpacity>

          <TextInput
            placeholder={placeholder}
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              height: 40,
              paddingBottom: SIZES.padding,
              flex: 1,
              color: 'white',
              ...FONTS.body3,
            }}
            placeholderTextColor={COLORS.white}
            // selectTextOnFocus={COLORS.white}
          />
        </View>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder={placeholder}
            style={{
              marginVertical: SIZES.padding,
              flex: 1,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              height: 40,
              color: 'white',
              ...FONTS.body3,
            }}
            placeholderTextColor={COLORS.white}
            // selectTextOnFocus={COLORS.white}
            secureTextEntry={passwordVisible ? true : false}
          />
          {isPassword ? (
            <TouchableOpacity
              onPress={togglePassword}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 10,
                height: 30,
                width: 30,
              }}>
              <Image
                source={passwordVisible ? icons.disable_eye : icons.eye}
                resizeMode="contain"
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </View>
  );
};
const Input = () => {
  return <Text>INput</Text>;
};
export default FormikInput;
