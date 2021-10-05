import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import RootStackScreen from './src/navigation/stacks/RootStack';
// import SplashScreen from './src/screens/SplashScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SplashScreen from './src/screens/Splashcreen';
import RootStackScreen from './src/navigations/stacks/RootStack';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen
          authenticated={store.getState().loginReducer.authenticated}
        />
      </NavigationContainer>
    </Provider>
  );
}

// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// // store.dispatch(checkToken());

// import {Login, Signup} from './src/screens';
// import BottomTabs from './src/navigations/BottomTabs';
// // import BottomTabs from './src/navigations/BottomTabs';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     border: 'transparent',
//   },
// };

// const Stack = createNativeStackNavigator();

// return (
//   <Provider store={store}>
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <RootStackScreen
//           authenticated={store.getState().loginReducer.authenticated}
//         />
//       </NavigationContainer>
//     </AuthContext.Provider>
//   </Provider>
// )

// // const App = () => {
// //   const authenticated = store.getState().loginReducer.authenticated;
// //   return (
// //     <Provider store={store}>
// //       <NavigationContainer theme={theme}>
// //         <Stack.Navigator
// //           screenOptions={{headerShown: false}}
// //           // initialRouteName="Login"
// //         >
// //           {authenticated ? (
// //             <Stack.Screen name="Home" component={BottomTabs} />
// //           ) : (
// //             <>
// //               <Stack.Screen name="Login" component={Login} />
// //               <Stack.Screen name="SignUp" component={Signup} />
// //             </>
// //           )}
// //           {/* {authenticated
// //         ?
// //           :

// //           } */}
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     </Provider>
// //   );
// // };

// export default App;

// // import * as React from 'react';
// // import { Button, Text, View } from 'react-native';

// // function DetailsScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Details!</Text>
// //     </View>
// //   );
// // }

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Home screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// // function SettingsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Settings screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// // const HomeStack = createNativeStackNavigator();

// // function HomeStackScreen() {
// //   return (
// //     <HomeStack.Navigator>
// //       <HomeStack.Screen name="Home" component={HomeScreen} />
// //       <HomeStack.Screen name="Details" component={DetailsScreen} />
// //     </HomeStack.Navigator>
// //   );
// // }

// // const SettingsStack = createNativeStackNavigator();

// // function SettingsStackScreen() {
// //   return (
// //     <SettingsStack.Navigator>
// //       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
// //       <SettingsStack.Screen name="Details" component={DetailsScreen} />
// //     </SettingsStack.Navigator>
// //   );
// // }

// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator>
// //         <Tab.Screen name="Home" component={HomeStackScreen} />
// //         <Tab.Screen name="Settings" component={SettingsStackScreen} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }
