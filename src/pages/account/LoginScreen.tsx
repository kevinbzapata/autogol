import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';






const LoginScreen = () => {
  let ScreenHeight = Dimensions.get('window').height;
  console.log('LoginScreen');


  const handleLoginEmail = () => {
    auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
            width: '100%',
            minHeight: Dimensions.get('window').height,
          }}
          source={require('../../assets/cancha.png')}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{
              minHeight: Dimensions.get('window').height,
            }}>
            <View
              style={{
                paddingHorizontal: 15,
                marginVertical : 100
              }}>
              {/* Ingresar Logo Autogol */}


              <View style={styles.containerLogo}>
              {/* <Image
                style={styles.imageLogo}
                source={require('../../assets/logoLogin.png')}
              /> */}
              </View >

              <View style={styles.containerLeyend}>
              <Text style={styles.textLeyend}> </Text>
              </View>

              <View style={styles.containerButtons}>
              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  borderWidth: 2,
                  margin: 10,

                }}>
                <Micon.Button
                  name="cellphone"
                  borderRadius={100}
                  backgroundColor={'#00000000'}
                  style={{ height: 50, marginLeft: 15 }}
                  onPress={() => handleLoginEmail()}
                >
                  <Text style={styles.textButton}>Ingresa con tu número</Text>
                </Micon.Button>

              </View>
              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  borderWidth: 2,
                  margin: 10,
                }}>
                <Icon.Button
                  name="facebook"
                  borderRadius={100}
                  backgroundColor={'#00000000'}

                  style={{ height: 50, marginLeft: 15 }}

                >
                  <Text style={styles.textButton}>Iniciar sesión con Facebook</Text>

                </Icon.Button>

              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  borderWidth: 2,
                  margin: 10,

                }}>
                <Icon.Button
                  name="google"
                  borderRadius={100}
                  backgroundColor={'#00000000'}

                  style={{ height: 50, marginLeft: 15 }}

                >
                   <Text style={styles.textButton}>Continuar con Google</Text>

                </Icon.Button>

              </View>

              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  borderWidth: 2,
                  margin: 10,
                }}>
                <AntDesign.Button
                  name="apple1"
                  borderRadius={100}
                  backgroundColor={'#00000000'}

                  style={{ height: 50, marginLeft: 15 }}

                >
                  <Text style={styles.textButton}>Continuar con Apple</Text>

                </AntDesign.Button>

              </View>
              </View>


            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {

    width : '100%',
    height: 100,
    alignContent : 'center'
  },
  containerButtons:{
    marginTop : 5
  },
  containerLogo:{
    flex: 1,
    marginTop: 20,


  },
  textButton:{
    color : '#fff',
    fontSize : 15,
    fontWeight : 'bold',

  },
  containerLeyend:{

    marginVertical : 10,
    height : 150,
    justifyContent : 'center',
    alignItems : 'center'

  },
  textLeyend:{
    fontSize : 25,
    fontWeight : 'bold',
    color : '#fff'
  }
});

export default LoginScreen;
