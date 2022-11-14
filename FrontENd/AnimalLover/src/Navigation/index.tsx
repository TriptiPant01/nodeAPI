import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardStackNavigator from './DashboardStack';
import LoginStackNavigator from './LoginStack';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    Alert.alert('asdf');
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={DashboardStackNavigator} />
        <Stack.Screen name="Login" component={LoginStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
