import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SplashScreen from './src/screens/Splashcreen';
import RootStackScreen from './src/navigations/stacks/RootStack';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
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
