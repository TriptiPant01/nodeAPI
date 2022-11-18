import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {List, Detail, PostAnimalDetail, YourFavourite} from '../Dashboard';
import Root from './DrawerNavigation';

const HomeStack = createNativeStackNavigator();

const DashboardStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="List" component={List} />
      <HomeStack.Screen name="Details" component={Detail} />
      <HomeStack.Screen name="PostAnimal" component={PostAnimalDetail} />
      <HomeStack.Screen name="YourFavourite" component={YourFavourite} />
    </HomeStack.Navigator>
  );
};

export default DashboardStackNavigator;
