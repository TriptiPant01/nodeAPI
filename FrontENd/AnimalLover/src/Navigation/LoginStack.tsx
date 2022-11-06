import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../login/Login';
const LoginStack = createNativeStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="List" component={Login} />
    </LoginStack.Navigator>
  );
};

export default LoginStackNavigator;
