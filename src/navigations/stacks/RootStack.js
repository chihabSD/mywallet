import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import BottomTabs from './BottomTabs';
// import AuthScreens from './AuthStack';
import {useRedux} from '../../hooks/useRedux';
import BottomTabs from '../BottomTabs';
import AuthScreens from './AuthScreen';
// import {useRedux} from '../../hooks/useRedux';
const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const {authenticated} = useRedux();
  // const auth =  useSelector((state) => state.authenticated)
  // const dispatch = useDispatch()
  return (
    <RootStack.Navigator screenOptions={{headerMode: 'none'}}>
      {authenticated ? (
        <RootStack.Screen
          name="App"
          component={BottomTabs}
          options={{animationEnabled: false}}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthScreens}
          options={{animationEnabled: false}}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
