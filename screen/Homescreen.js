import { StyleSheet,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box ,HStack,View,Text} from 'native-base'
import { supabase } from '../lib/supabase'
import TitleComponent from '../Component/TitleComponent'
import { Colors } from '../constant/Color'
import Floatingbut from '../Component/Floatingbut'



const Homescreen = ({navigation}) => {
 const [email ,setEmail]=useState()
    useEffect(()=>{
      const Getuser=async()=>{
        
         const { data: { user } } = await supabase.auth.getUser()
         setEmail(user.email)
      }
      Getuser()
    },[])
    const box= new Array(3).fill('')
  return (
    <Box safeArea={5} flex={1}>
      <View style={{}}>
       <TitleComponent color={Colors.semiheading} fontWeight={'normal'} title={'Daily Tasks:'}/>
       <HStack space={2} pt={3} mt={4} marginX={3} marginRight={19}>
       {box.map((item,index)=>(
        <View w={'1/3'} backgroundColor={ index%2===0?'#eeeff0':'#fff4f4'}
        rounded={8}
        pt={4}
        pl={3}
        height={100} key={index}>
        <Text  color={'blue.800'}>Check out</Text>
        <Text   color={'blue.800'} fontSize={'3xl'}>1</Text>
        </View>
       ))}
       </HStack>
       <Text style={{fontSize:13,fontWeight:'600'}}> Welcome {email}</Text>
       <TouchableOpacity onPress={()=> navigation.navigate('Task')}
       style={{padding:10,borderRadius:8, backgroundColor:'#eeeff0',alignItems:'center',marginTop:60}}>
       <Text alignSelf={'flex-start'} style={{fontSize:16}} color={'blue.500'} mb={4}>Check all my tasks</Text>
       <Text>See all tasks and filter them by categories you have selected when creating them</Text>
       </TouchableOpacity>
       </View>
       <Floatingbut/>
    </Box>
  )
}

export default Homescreen

const styles = StyleSheet.create({})