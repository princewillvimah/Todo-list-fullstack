import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Auth from './screen/Auth';
import Welcome from './screen/Welcome';
import { StatusBar } from 'expo-status-bar';
import { supabase } from './lib/supabase';
import Homescreen from './screen/Homescreen';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#fff'
  },
};
const Main = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <NavigationContainer theme={MyTheme}>

       <StatusBar style=''/>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
        
        {session && session.user ?    (
          <Stack.Screen name="Home" component={Homescreen} />
        )
        :( 
          <>
          <Stack.Screen name="Welcome" component={Welcome} options={
        {
          header:()=>false
        }
        }/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Auth} />
        </>
        )}

       
        </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default Main;

const styles = StyleSheet.create({})