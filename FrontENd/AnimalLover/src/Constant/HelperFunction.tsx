import {Dimensions, ImageSourcePropType} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

interface userDetail {
  name: string;
  id: string;
  photo: ImageSourcePropType;
}

const Scale = (size: number): number => (width / guidelineBaseWidth) * size;
const VerticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const ModerateScale = (size: number, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

const saveUserDetail = async (user: userDetail) => {
  const id = ['@id', user.id];
  const name = ['@name', user.name];
  const photo = ['@photo', user.photo];
  try {
    await AsyncStorage.multiSet([id, name, photo]);
  } catch (e) {
    //save error
  }

  console.log('Done.');
};

export {Scale, VerticalScale, ModerateScale, saveUserDetail};
