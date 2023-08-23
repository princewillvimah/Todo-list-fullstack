import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
const Floatingbut = () => {
  return (
    <TouchableOpacity
     style={{backgroundColor:'#4681a3', width:50, height:50, alignItems:'center',
     position:'absolute',
     bottom:150,
     right:20,
      justifyContent:'center', borderRadius:50}}>
    <Entypo name="plus" size={30} color="#fff" />

    </TouchableOpacity>
  )
}

export default Floatingbut;

const styles = StyleSheet.create({})