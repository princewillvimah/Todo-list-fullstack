import { StyleSheet, Text, View,Modal ,TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


const Help = (props) => {
  return (
    <Modal animationType='fade' visible={true} transparent={true}>
      <TouchableOpacity onPress={()=> props.hideModal()} style={{flex:1,opacity:'60%',backgroundColor:'rgba(0,0,0,0.60)',}} activeOpacity={1}>
      </TouchableOpacity>
    </Modal>
  )
}

export default Help

const styles = StyleSheet.create({})