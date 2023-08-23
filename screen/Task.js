import { StyleSheet, Text, View,ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import TitleComponent from "../Component/TitleComponent";
import { Colors } from "../constant/Color";
import { supabase } from "../lib/supabase";
import { Button, FlatList } from "native-base";
import TodoListItem from "../Component/TodoListItem";
import Help from "./Help";
import { ActivityIndicator } from "react-native-paper";

const Task = () => {
  const [userId,setUserId]=useState(null)
  const [loading,setLoading]=useState(true);
  //get userss
  useEffect(() => {
    const Getuser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserId(user.id);
    };
    Getuser();
  }, []);

  useEffect(() => {
    const GetItem = async () => {
      let { data: tasks, error } = await supabase.from("tasks").select('*').eq('id',userId);
      return tasks;
    };
    GetItem().then((items) => {
      setItem(items);
    });
  }, []);
  const [item, setItem] = useState([]);
  const [showModal,setShowModal]=useState(false)
  return (
    <View style={{ marginHorizontal: 30, marginTop: 7 }}>
      <TitleComponent
        title={"Your Vimah's Task"}
        color={Colors.semiheading}
        fontWeight={"normal"}
        fontSize={"xl"}
      />
      <View>
        <FlatList
          data={item}
          renderItem={({ item, index }) => <TodoListItem items={item}/>}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}        />
      </View>
      <View style={{marginTop:15,}}>
      <Button onPress={()=>setShowModal(true)}>Click Here for help</Button>
      </View>
      {showModal? <Help hideModal={()=> setShowModal(false)}/> :null}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
