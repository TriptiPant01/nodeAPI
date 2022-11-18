import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {FC} from 'react';
import {colors, Images} from '../Constant';
import {Scale} from '../Constant/HelperFunction';

interface Header {
  title: string;
  back?: boolean;
  onPressBack?: () => void;
  showSidebar?: boolean;
  navigation?: any;
}
const Header: FC<Header> = props => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.hamBurgerContainer}
        onPress={() => props.navigation.openDrawer()}>
        {props.showSidebar && (
          <Image
            source={Images.hamburgerIcon}
            style={styles.backIconContainerStyle}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imageContainerStyle}
        onPress={props.onPressBack}>
        {props.back && (
          <Image
            source={Images.backIcon}
            style={styles.backIconContainerStyle}
          />
        )}
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.textstyle}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  hamBurgerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Scale(10),

    width: 100,
    zIndex: 1,
  },
  hamburgerIconContainer: {
    height: Scale(40),
    width: Scale(40),
    resizeMode: 'contain',
  },

  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  headerWrapper: {
    height: Scale(90),
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',

    marginBottom: Scale(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textstyle: {
    color: 'black',
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',

    flex: 1,
  },
  backIconContainerStyle: {
    width: Scale(35),
    height: Scale(30),
    resizeMode: 'contain',
    tintColor: 'black',
  },
});
