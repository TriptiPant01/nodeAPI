import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardStackNavigator from './DashboardStack';
import LoginStackNavigator from './LoginStack';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={DashboardStackNavigator} />
      <Stack.Screen name="Login" component={LoginStackNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
