import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardStackNavigator from './DashboardStack';
import LoginStackNavigator from './LoginStack';
import {Alert} from 'react-native';
import {getUserDetail} from '../Constant/HelperFunction';
import Root from './DrawerNavigation';

const Stack = createNativeStackNavigator();
//
const App = () => {
  const [hasToken, setHasToken] = useState<string>('');
  useEffect(() => {
    getUserDetailFromStorage();
  }, []);
  const getUserDetailFromStorage = async (): Promise<void> => {
    const value = await getUserDetail();

    setHasToken(value?.id);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        {!hasToken ? (
          <Stack.Screen name="Login" component={LoginStackNavigator} />
        ) : (
          <>
            {/* <Stack.Screen name="Home" component={Root} /> */}
            <Stack.Screen name="Root" component={Root} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
