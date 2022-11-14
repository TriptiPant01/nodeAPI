import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

import {colors} from '../Constant';
import {Labelling} from '../CommonModule';
import {saveUserDetail, Scale} from '../Constant/HelperFunction';

const Login: FC = ({navigation, route}) => {
  useEffect(() => {
    GoogleSignin.configure({
      // webClientId: '',
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId:
        '516736941441-8m7f1u8hs2hqu418mrclqurcfo3f3nv0.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const signIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();

      saveUserDetail({
        id: userInfo?.user?.id,
        name: userInfo?.user?.name,
        photo: userInfo?.user?.photo,
      });

      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginContainer} onPress={() => signIn()}>
        <Labelling title="Login With Google" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.loginContainer}>
        <Labelling title="Login With Facebook" />
      </TouchableOpacity> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: Scale(30),
    paddingVertical: Scale(20),
    borderRadius: Scale(20),
    marginVertical: Scale(10),
  },
});

// import React, {useEffect} from 'react';
// import {Button} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// export default function Login() {
//   useEffect(() => {
//     GoogleSignin.configure({
//       // webClientId: '',
//       // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//       iosClientId:
//         '516736941441-8m7f1u8hs2hqu418mrclqurcfo3f3nv0.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     });
//   }, []);
//   const singInwithGoogle = async () => {
//     const {idToken} = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//     const a = await auth().signInWithCredential(googleCredential);
//     console.log(a);
//   };

//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
//       <Button title="Google" onPress={singInwithGoogle} />
//     </View>
//   );
// }
