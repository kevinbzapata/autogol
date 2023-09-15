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






const LoginScreen = () => {
  let ScreenHeight = Dimensions.get('window').height;
  console.log('LoginScreen');

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
              <Image
                style={styles.imageLogo}
                source={require('../../assets/logoLogin.png')}
              />
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
    marginTop: 20,
    width : '100%',
    height: 100,
    alignContent : 'center'
  },
  containerButtons:{
    marginTop : 50
  },
  containerLogo:{
    flex: 1,
    
  },
  textButton:{
    color : '#fff',
    fontSize : 15,
    fontWeight : 'bold',
    
  }
});

export default LoginScreen;
