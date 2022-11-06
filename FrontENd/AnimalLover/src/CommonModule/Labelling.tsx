import {Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface ILabelling {
  title: string;
}

const Labelling: FC<ILabelling> = props => {
  return <Text style={styles.labelTextStyle}>{props.title}</Text>;
};

export default Labelling;

const styles = StyleSheet.create({
  labelTextStyle: {
    fontWeight: '700',
  },
});
