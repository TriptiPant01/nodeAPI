import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {View, Text} from 'react-native';
import DashboardStackNavigator from './DashboardStack';
import {PostAnimalDetail, YourFavourite} from '../Dashboard';

function Root() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={DashboardStackNavigator} />
      <Drawer.Screen name="PostAnimal" component={PostAnimalDetail} />
      <Drawer.Screen name="YourFavourite" component={YourFavourite} />
    </Drawer.Navigator>
  );
}

export default Root;
