import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState, FC} from 'react';
import {Header, Labelling} from '../CommonModule';
import {IAnimalList} from './List';
import {getAnimalDetailAPI} from '../API/Service';
import {colors} from '../Constant';
import {Scale} from '../Constant/HelperFunction';

interface IDetail extends IAnimalList {
  reviews: [];
  description: string;
  phone_number: number;
}

const DetailScreen: FC<IDetail> = ({navigation, route}) => {
  const [Detail, IDetail] = useState<IDetail>();
  useEffect(() => {
    getAnimalDetail();
  }, []);

  const getAnimalDetail = async (): Promise<void> => {
    const value = await getAnimalDetailAPI(route.params.id);
    const {animalDetail, review} = value;
    IDetail({...animalDetail, review});
  };

  const ListDetail = (value: any): JSX.Element => {
    return (
      <View style={styles.detailContainerStyle}>
        <Labelling title={value.label} />
        <Text> : </Text>
        <Labelling title={value.labelValue} />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Header
        title={route.params.name}
        back={true}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.textContainer}>
        <ListDetail label={'Name'} labelValue={Detail?.name} />
        <ListDetail label={'Age'} labelValue={Detail?.age} />
        <ListDetail label={'Gender'} labelValue={Detail?.gender} />
        <ListDetail label={'Location'} labelValue={Detail?.location} />
        <ListDetail
          label={'PhoneNumber'}
          labelValue={Detail?.phone_number || 'Not Given'}
        />
        <ListDetail label={'Desc'} labelValue={Detail?.description} />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  detailContainerStyle: {
    flexDirection: 'row',
    marginVertical: Scale(5),
  },
  textContainer: {
    backgroundColor: colors.primaryColor,
    flex: 1,
    // paddingRight: Scale(50),
    // paddingLeft: Scale(20),
    alignItems: 'center',
    paddingHorizontal: Scale(30),
  },
});
