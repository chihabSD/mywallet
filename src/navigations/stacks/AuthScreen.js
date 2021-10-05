import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup} from '../../screens';

const AuthStack = createStackNavigator();
function AuthScreens() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Signup} />
      {/* <AuthStack.Screen name="Login" component={AuthScreens} /> */}
    </AuthStack.Navigator>
  );
}
export default AuthScreens;
