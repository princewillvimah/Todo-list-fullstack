import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from 'native-base';
import { Colors } from '../constant/Color';

const InputComponet = ({placeholder,value,setValue,secure=false,}) => {
  return (
   <Input style={styles.inputs} 
   value={value}
   onChangeText={setValue}
   variant={'unstyled'} placeholder={placeholder} placeholderTextColor={'black'}
   secureTextEntry={secure}
   /> 
    
  )
}

export default InputComponet;

const styles = StyleSheet.create({
  inputs:{
    borderRadius:10,
    backgroundColor:Colors.inputcolor,
    borderColor:'transparent',
    paddingHorizontal:10,
    fontSize:15,
    height:50
  }

})