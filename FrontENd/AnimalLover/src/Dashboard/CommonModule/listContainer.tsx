import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../Constant';
import {Scale} from '../../Constant/HelperFunction';
import {IAnimalList} from '../List';

const ListContainer: FC<IAnimalList> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onClick(props.id)}
      key={props.id}>
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <Image source={props.image} style={styles.imageStyle} />
        </View>
        <View>
          <Text>Name: {props.name}</Text>
          <Text>Age: {props.age}</Text>
          <Text>Gender: {props.gender}</Text>
          <Text>Location: {props.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    marginBottom: Scale(10),
  },
  listContainer: {
    borderWidth: 0.2,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.whiteColor,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    // borderRadius: 50,
  },
});
export default ListContainer;
