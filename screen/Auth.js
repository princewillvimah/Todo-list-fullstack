import { Linking, StyleSheet,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box,View,Text,Button, ScrollView } from 'native-base'
import TitleComponent from '../Component/TitleComponent'
import InputComponet from '../Component/Input'
import { Colors } from '../constant/Color'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { supabase } from '../lib/supabase'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
// import { supabase } from '../lib/supabase'

const Terms= 'https://www.freeprivacypolicy.com/live/00badcfe-a443-4997-8a48-669b185494d3';
const Auth = ({navigation}) => {
const handleSignup=async()=>{
  if(first===''|| last===''|| password===''||email===''|| Retype===''){
    return Toast.show({
      type: 'error',
      text1: 'Please fill in the field',
      text2: 'FAILED'
  });
  }
  if(password !== Retype){
    return Toast.show({
      type: 'error',
      text1: 'Please Input the Right Passoword',
      text2: 'FAILED'
  });
  }
  if(!email.includes('@') ){
    return Toast.show({
      type: 'error',
      text1: 'Use a  Valid Email',
      text2: 'FAILED'
  });
  }
  if(Accepted === false){
    return Toast.show({
      type: 'error',
      text1: 'Please Read our policy',
      text2: 'FAILED'
  });

}
  setLoading(true)
  const {error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options:{
          data:{
            first,
            last
          }
        }
      })
   if(error) {
    Toast.show({
            type: 'error',
            text1: 'FAILED',
            text2: 'FAILED'
    });
   }  
   if(!error){
    Toast.show({
            type: 'success',
            text1: 'Hello Vimah is SUCESSFULL',
            text2: 'YOU HAVE SUCCESSFULLY CREATED AN ACCOUNT👋'
          });
   }
   setLoading(false)
}
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [first,setFirst]=useState(''); 
  const [last,setLast]=useState('');
  const [Retype,setRetype]=useState('');
  const [Accepted,setAccepted]=useState(false);
  const [loading, setLoading] = useState(false)

  const navigateToLogin=()=>{
    navigation.navigate('Login')
  }
  const HandleLink=(url)=>{
    Linking.openURL(url)
  }

  return (
    <Box safeAreaX={7} safeAreaTop={10}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View marginTop={3}>
    <TitleComponent title={'Join the hub!'} fontSize={'xl'}/>
    <View marginTop={10} style={styles.container}>
    <InputComponet value={first} setValue={setFirst} placeholder={'First name'} />
    <InputComponet value={last} setValue={setLast} placeholder={'Last name'}/>
    <InputComponet value={email} setValue={setEmail} placeholder={'Email'}/>
    <InputComponet value={password} setValue={setPassword} placeholder={'Password'} secure={true}/>
    <InputComponet value={Retype} setValue={setRetype} placeholder={'Confirm Password'} secure={true}/>
    </View>
    <View>

    <View style={styles.links}>
    <MaterialCommunityIcons onPress={()=> setAccepted(!Accepted)} name={Accepted? 'checkbox-intermediate':'checkbox-blank-outline'} size={24} color="black" />
    <Text>
    I agree to  
       <Text style={{color:'#8b97a8', textDecorationLine:'underline'}} onPress={()=> HandleLink(Terms)}> Terms and Conditions</Text> {""}
        and
       <Text style={{color:'#8b97a8', textDecorationLine:'underline'}} onPress={()=> HandleLink(Terms)}> Privacy Policy</Text>
    </Text>
    </View>
   
    </View>
    <Button style={styles.buton} onPress={handleSignup} isLoading={loading} >Sign Up</Button>
    <View style={styles.textCon}>
    <Text>ALready have an account?</Text>
    <Text onPress={navigateToLogin} color={'#403572'} fontWeight={'semibold'} fontSize={'sm'}> Log in</Text>
    </View>

    </View>
    </ScrollView>
  </Box>
  )
}

export default Auth

const styles = StyleSheet.create({
  container:{
    gap:20,
    marginTop:40,

  },
  buton:{
    marginTop:40,
    height:50,
    backgroundColor:Colors.buttonColourblue,
    borderRadius:10,
  },
  textCon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },
  links:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    gap:3,
    
  }
})