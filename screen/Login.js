import { StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Box,Button,View ,Text} from 'native-base'
import TitleComponent from '../Component/TitleComponent'
import InputComponet from '../Component/Input'
import { Colors } from '../constant/Color'
import { supabase } from '../lib/supabase'
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
      const handleSignin=async()=>{
        if(email===''|| password===''){
          return Toast.show({
            type: 'error',
            text1: 'Please fill in the field',
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
        setLoading(true)
        const {error} = await supabase.auth.signInWithPassword({
              email: email,
              password: password,
            })
         if(error) {
          Toast.show({
                  type: 'error',
                  text1: 'FAILED TO LOG IN',
                  text2: 'Input the right details pls'
          });
         }  
         if(!error){
          Toast.show({
                  type: 'success',
                  text1: 'Hello Vimah is SUCESSFULL',
                  text2: 'YOU HAVE LOGGED IN TO YOUR ACCOUNT👋'
                });
         }
        setLoading(false) 
      }

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading, setLoading] = useState(false)
  const navigateToRegister=()=>{
    navigation.navigate('Signup')
  }
 
  return (
    <Box safeAreaX={7} safeAreaTop={10}>
      <View marginTop={3}>
      <TitleComponent title={'Welcome Back!'} fontSize={'xl'}/>
      <View marginTop={10} style={styles.container}>
      <InputComponet placeholder={'Email'} value={email} setValue={setEmail}/>
      <InputComponet placeholder={'Password'} value={password} setValue={setPassword} secure={true} />
      </View>
      <Button isLoading={loading} onPress={handleSignin} style={styles.buton}>Sign In</Button>
      <View style={styles.textCon}>
      <Text>Not Registered?</Text>
      <Text onPress={navigateToRegister} color={'#403572'} fontWeight={'semibold'} fontSize={'sm'}> Sign up</Text>
      </View>

      </View>
    </Box>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    gap:20,
    marginTop:40,

  },
  buton:{
    marginTop:40,
    height:50,
    backgroundColor:Colors.buttonColourPurple,
    borderRadius:10,
  },
  textCon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  }
})