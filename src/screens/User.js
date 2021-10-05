import React from 'react';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from 'react-native';

import {FONTS, COLORS, SIZES, icons} from '../constants';
import Header from '../components/Header';
// import HeaderBar from "../components/HeaderBar";
const SectionTitle = ({title}) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
      }}>
      <Text style={{color: COLORS.green, ...FONTS.h4}}>{title}</Text>
    </View>
  );
};

const Setting = ({title, value, type, onPress}) => {
  if (type == 'button') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Text style={{flex: 1, color: COLORS.black, ...FONTS.h3}}>{title}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginRight: SIZES.radius,
              color: COLORS.darkgray,
              ...FONTS.h3,
            }}>
            {value}
          </Text>
          <Image
            source={icons.left}
            style={{
              height: 15,
              width: 15,
              tintColor: COLORS.black,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <Text style={{flex: 1, color: COLORS.black, ...FONTS.h3}}>{title}</Text>
        <Switch
          trackColor={{true: COLORS.primary, false: 'yellow'}}
          value={value}
          onValueChange={value => onPress(value)}
        />
      </View>
    );
  }
};

const HeaderBar = ({title}) => {
  return (
    <View
      style={{
        height: isIphoneX() ? 100 : 70,
        // height: 70,
        paddingHorizontal: SIZES.radius,
        justifyContent: 'flex-end',
        backgroundColor: COLORS.primary,
        // marginBottom: 13,
      }}>
      <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>{title}</Text>
    </View>
  );
};
const User = () => {
  const [faceId, setFaceId] = React.useState(true);

  return (
    <View
      style={{
        flex: 1,
        //paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      <HeaderBar title="Profile" />
      {/* <Header title="Profile" /> */}
      {/* <Logo / */}

      {/* Details */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Email & User Id */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
          }}>
          {/* Email and ID */}
          <View
            style={{
              flex: 1,
            }}>
            <Text style={{color: COLORS.black, ...FONTS.body3}}>
              adamchihab2012!@homail.com
            </Text>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              ID:332332323
            </Text>
          </View>

          {/* Status */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.verified}
              style={{
                height: 25,
                width: 25,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.green,
                ...FONTS.body4,
              }}>
              Verified
            </Text>
          </View>
        </View>

        {/* APP */}
        <SectionTitle title="APP" />

        <Setting
          title="Launch Screen"
          value="Home"
          type="button"
          onPress={() => console.log('Pressed')}
        />

        <Setting
          title="Appearance"
          value="Dark"
          type="button"
          onPress={() => console.log('Pressed')}
        />

        {/* ACCOUNT */}
        <SectionTitle title="ACCOUNT" />

        <Setting
          title="Payment Currency"
          value="USD"
          type="button"
          onPress={() => console.log('Pressed')}
        />

        <Setting
          title="Language"
          value="English"
          type="button"
          onPress={() => console.log('Pressed')}
        />

        {/* SECURITY */}
        <SectionTitle title="SECURITY" />

        <Setting
          title="FaceID"
          value={faceId}
          type="switch"
          onPress={value => setFaceId(value)}
        />

        <Setting
          title="Password Settings"
          value=""
          type="button"
          onPress={() => console.log('Pressed')}
        />

        <Setting
          title="Change Password"
          value=""
          type="button"
          onPress={() => console.log('Pressed')}
        />

        <Setting
          title="2-Factor Authentication"
          value=""
          type="button"
          onPress={() => console.log('Pressed')}
        />
      </ScrollView>
    </View>
  );
};

export default User;
