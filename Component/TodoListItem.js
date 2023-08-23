import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constant/Color";

const TodoListItem = ({ items }) => {
  return (
    <View style={styles.main}>
      <View style={styles.item}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:17}}>{items.description}</Text>
        <Text style={{color:Colors.buttonColourPurple,fontSize:13}}>{items.category}</Text>
        </View>

        <Text style={{fontSize:12,marginTop:60,color:Colors.buttonColourblue}}>Deadline: {items.deadline}</Text>
      </View>
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    alignItems: "center",
  },
  item: {
    width: "95%",
    height: 100,
    paddingHorizontal:10,
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
