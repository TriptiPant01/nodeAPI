import {Dimensions, ImageSourcePropType} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export interface IuserDetail {
  name: string;
  id: string;
  photo: ImageSourcePropType;
}

const Scale = (size: number): number => (width / guidelineBaseWidth) * size;
const VerticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const ModerateScale = (size: number, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

const saveUserDetail = async (user: IuserDetail) => {
  const id = ['@id', user.id];
  const name = ['@name', user.name];
  const photo = ['@photo', user.photo];
  try {
    await AsyncStorage.multiSet([id, name, photo]);
  } catch (e) {
    console.log(e);
  }
};

const getUserDetail = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet(['@id', '@name', '@photo']);
    const id = values[0][1];
    const name = values[1][1];
    const photo = values[2][1];
    return {id, name, photo};
  } catch (e) {
    // read error
  }
};

export {Scale, VerticalScale, ModerateScale, saveUserDetail, getUserDetail};
