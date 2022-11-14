import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, FC} from 'react';

import {Header, Labelling} from '../CommonModule';
import {IAnimalList} from './List';
import {getAnimalDetailAPI, postComment} from '../API/Service';
import {colors} from '../Constant';
import {Scale} from '../Constant/HelperFunction';

interface IDetail extends IAnimalList {
  reviews: [];
  description: string;
  phone_number: number;
}

const DetailScreen: FC<IDetail> = ({navigation, route}) => {
  const [Detail, IDetail] = useState<IDetail>();
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    getAnimalDetail();
  }, []);

  const getAnimalDetail = async (): Promise<void> => {
    const value = await getAnimalDetailAPI(route.params.id);
    const {animalDetail, reviews} = value;
    IDetail({...animalDetail, reviews});
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
  const handleOnPress = async (): Promise<void> => {
    const response = await postComment(comment);
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
        {Detail?.reviews?.map((i, index) => {
          return (
            <View style={styles.commentContainerDisplay} key={index}>
              <Text>{i.comments}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.commentContainer}>
        <TextInput
          placeholder="Comments"
          onChangeText={val => setComment(val)}
          value={comment}
        />
        <TouchableOpacity
          style={styles.sendContainerStyle}
          onPress={() => handleOnPress()}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  commentContainerDisplay: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: Scale(30),
    marginVertical: Scale(5),
    paddingVertical: Scale(10),
    borderRadius: Scale(10),
  },
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
    alignItems: 'center',
    paddingHorizontal: Scale(30),
  },
  commentContainer: {
    backgroundColor: colors.whiteColor,
    height: Scale(80),
    marginBottom: Scale(20),
    borderRadius: Scale(20),
    paddingHorizontal: Scale(20),
    marginHorizontal: Scale(20),
    // alignItems: 'center',
    justifyContent: 'center',
  },
  sendContainerStyle: {
    position: 'absolute',
    right: Scale(10),
    backgroundColor: '#0394fc',
    flex: 1,
    padding: Scale(10),
    borderRadius: Scale(10),
  },
});
