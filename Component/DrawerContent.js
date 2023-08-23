import { StyleSheet, Text, View,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { supabase } from '../lib/supabase'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
const Terms= 'https://www.freeprivacypolicy.com/live/00badcfe-a443-4997-8a48-669b185494d3';
const DrawerContent = (props) => {
  const HnadleLink=(url)=>{
    Linking.openURL(url)
  }
  const Logout=async()=>{
    await supabase.auth.signOut()
    Toast.show({
      type: 'success',
      text1: 'You have SUCESSFULLY Logged out',
      text2: 'I Hope To see you soon!👋'
    });
}
  return (
  <DrawerContentScrollView>
      <DrawerItem
      label={'Home'}
      onPress={()=>props.navigation.navigate('Home')}
      />
      <DrawerItem
      label={'Task'}
      onPress={()=>props.navigation.navigate('Task')}
      />
      <DrawerItem
      label={'Privacy'}
      onPress={()=>HnadleLink(Terms)}
      />
      <DrawerItem
      label={'Terms'}
      onPress={()=>HnadleLink(Terms)}
      />
      <DrawerItem
      label={'About Vimah'}
      />
      <DrawerItem
      label={'Logout'}
      onPress={Logout}
      />
  </DrawerContentScrollView>
  )
}

export default DrawerContent

const styles = StyleSheet.create({})