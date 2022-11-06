import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from './src/Constant';

import Navigation from './src/Navigation';

const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
