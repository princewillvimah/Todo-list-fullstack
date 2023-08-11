import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box } from 'native-base'
import { supabase } from '../lib/supabase'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Homescreen = () => {
    const Logout=async()=>{
        await supabase.auth.signOut()
        Toast.show({
          type: 'success',
          text1: 'You have SUCESSFULLY Logged out',
          text2: 'I Hope To see you soon!👋'
        });
    }
    useEffect(()=>{
      const Getuser=async()=>{
        
         const { data: { user } } = await supabase.auth.getUser()
         console.log(user)
      }
      Getuser()
    },[])
  return (
    <Box safeArea={7}>
      <Text style={{fontSize:50,fontWeight:'600'}} onPress={Logout}>Homescreen</Text>
    </Box>
  )
}

export default Homescreen

const styles = StyleSheet.create({})