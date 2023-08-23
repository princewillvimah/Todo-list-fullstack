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
import Task from './screen/Task';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import AddTask from './screen/AddTask';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './Component/DrawerContent';
import { PaperProvider,} from 'react-native-paper';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props)=> <DrawerContent {...props}/>
   } screenOptions={{
      headerTitleAlign:'center'
    }}>
      <Drawer.Screen name="Home" component={Homescreen} options={{
        headerTitleAlign:'center'
      }} />
      <Drawer.Screen name="Task" component={Task} />
    </Drawer.Navigator>
  );
}




const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <PaperProvider>
    <Tab.Navigator>
      <Tab.Screen name="home" component={MyDrawer} options={{
        tabBarIcon:({color})=>(
          <FontAwesome5 name="home" size={24} color={color} />
        )
      }}/>
      <Tab.Screen name="Add Tasks" component={AddTask} 
      options={{
        tabBarIcon:({color})=>(
          <Entypo name="add-to-list" size={24} color={color} />
        )
      }}
      />

    </Tab.Navigator>
    </PaperProvider>
  );
}

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
          headerShown:false,
        }}>
        
        {session && session.user ?    (
          <Stack.Screen name="tabs" component={MyTabs}/>
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