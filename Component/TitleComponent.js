import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, Input } from 'native-base'
import { Colors } from '../constant/Color'

const TitleComponent = ({title,fontSize,color=Colors.Headingcolor,fontWeight}) => {
  return (
  <Heading color={color} fontWeight={fontWeight&& fontWeight} size={fontSize}>
  {title}
  </Heading>
  )
}

export default TitleComponent

const styles = StyleSheet.create({})