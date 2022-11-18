import {View, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../CommonModule';
import ListContainer from './CommonModule/listContainer';
import Images from '../Constant/Images';
import {colors} from '../Constant';
import {fetchAnimalList} from '../API/Service';
import {getUserDetail, IuserDetail} from '../Constant/HelperFunction';

export interface IAnimalList {
  id: number;
  name: string;
  age: string;
  gender: string;
  image: ImageSourcePropType;
  location: string;
  onClick?: (id: number, name: string) => void;
}
export default function List({navigation}) {
  const [animalList, animalListState] = useState<IAnimalList[]>([]);
  const [userDetail, setuserDetail] = useState<IuserDetail>();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    const value = await fetchAnimalList();
    const userDetailValue = await getUserDetail();
    animalListState(value);
    setuserDetail(userDetailValue);
  };

  const handleOnClick = (id: number, name: string): void => {
    navigation.navigate('Details', {id, name});
  };

  return (
    <View style={styles.container}>
      <Header
        title={`Welcome ${userDetail?.name}`}
        showSidebar={true}
        navigation={navigation}
      />
      {animalList?.map((i, key) => (
        <ListContainer
          name={i.name}
          age={i.age}
          gender={i.gender}
          image={Images.defaultIcon}
          location={i.location}
          onClick={() => handleOnClick(i.id, i.name)}
          id={i.id}
          key={key}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});
