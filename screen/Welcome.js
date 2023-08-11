import { StyleSheet,  Dimensions} from 'react-native'
import React from 'react'
import {View,Text, Image, Button} from 'native-base'
import TitleComponent from '../Component/TitleComponent'
import { Colors } from '../constant/Color'

const Welcome = ({navigation}) => {
  const Navigatetologin=()=>{
  navigation.navigate('Login')
  }
  const NavigateTosignup=()=>{
    navigation.navigate('Signup')
  }
  return (
    <View style={{flex:1,}}>
      <Image source={require('../assets/pic111.png')}
      style={styles.imagestyle}
      alt='image'
      />
      <View style={styles.overlay}/>
   <View backgroundColor={'white'}  style={styles.container}>
    <TitleComponent title={'Best Task Manager App'}/>
    <Text style={styles.text}>Get organized by sorting out all your tasks and boost your productivity.</Text>
    <View style={{width:'70%',marginTop:30,gap:10,}}>
   <Button backgroundColor={Colors.buttonColourPurple} onPress={Navigatetologin} rounded={'md'}>Login</Button>
   <Button backgroundColor={Colors.buttonColourblue} onPress={NavigateTosignup} rounded={'md'}>Get Started</Button>
   </View>
   </View>
   
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
imagestyle:{
  height: Dimensions.get('window').height*0.6,
  width:'100%',
},
container:{
  width:'100%',
  height:'100%',
  alignItems:'center'
},
overlay:{
  width:'100%',
  height:50,
  backgroundColor:'white',
  marginTop:-20,
  borderTopRightRadius:20,
  borderTopLeftRadius:20
},
text:{
  fontSize:15,
  textAlign:'center',
  marginHorizontal:20,
  marginTop:20,
  fontWeight:'400',
  color:Colors.textColor,width:'72%'
}

})