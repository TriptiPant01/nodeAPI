import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const Scale = (size: number): number => (width / guidelineBaseWidth) * size;
const VerticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const ModerateScale = (size: number, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

export {Scale, VerticalScale, ModerateScale};
