import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup} from '../../screens';
const AuthStack = createStackNavigator();
function AuthScreens() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={Signup} />
      {/* <AuthStack.Screen name="Login" component={AuthScreens} /> */}
    </AuthStack.Navigator>
  );
}
export default AuthScreens;
