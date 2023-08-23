import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, View, Text, ScrollView, HStack, Button } from "native-base";
import TitleComponent from "../Component/TitleComponent";
import { Colors } from "../constant/Color";
import InputComponet from "../Component/Input";
import { EvilIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { supabase } from "../lib/supabase";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const Categories = [
  "Very important",
  "Important",
  "Not so Important",
  "Quick Todo",
  "Nice Todo",
];
const AddTask = ({navigation}) => {
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("Very important");
  const [deadline, setDeadline] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setid] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setOpen(false);
    setDeadline(currentDate);
  };
  const showMode = () => {
    setOpen(true);
  };
  useEffect(() => {
    const Getuser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setid(user.id);
    };
    Getuser();
  }, []);
  const handleTask = async () => {
    setLoading(true);
    const { error } = await supabase
    .from('tasks')
    .insert({id,description,deadline,category:selected})
    if (error) {
      Toast.show({
        type: "error",
        text1: "FAILED TO LOG IN",
        text2: error.message
      });
      setLoading(false);
      return;
    }
    if (!error) {
      Toast.show({
        type: "success",
        text1: "Hello Vimah is SUCESSFULL",
        text2: "YOU HAVE LOGGED IN TO YOUR ACCOUNT👋",
      });
      navigation.navigate('Task')
    }
    setLoading(false);
    
    return;
    
  };

  return (
    <Box safeArea={7}>
      <View mt={20}>
        <TitleComponent
          title={"Add New Task"}
          color={Colors.semiheading}
          fontWeight={"normal"}
          fontSize={"xl"}
        />
        <Text my={5}>Describe Your task</Text>
        <View style={styles.inputStyle}>
          <InputComponet
            placeholder={"Type here..."}
            value={description}
            setValue={setDescription}
            style={styles.inputStyle}
          />
        </View>
        <Text>Type</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, padding: 5 }}
        >
          {Categories.map((cat, index) => (
            <TouchableOpacity
              onPress={() => setSelected(cat)}
              key={index}
              style={[
                styles.cat,
                selected === cat ? styles.selectedStyle : styles.cat,
              ]}
            >
              <Text style={{ color: "#4691a3" }}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View>
          <Text mb={3}>Deadline</Text>
          <TouchableOpacity onPress={showMode} style={styles.deadline} mt={4}>
            <HStack alignItems={"center"}>
              <EvilIcons name="calendar" size={30} />
              <Text>{moment(deadline).format("L")}</Text>
            </HStack>
            {open && (
              <DateTimePicker
                testID="dateTimePicker"
                value={deadline}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
        </View>
        <Button
          mt={10}
          h={50}
          isLoading={loading}
          onPress={handleTask}
          backgroundColor={"#5551ff"}
          
        >
          <Text fontSize={"xl"} color={"#fff"}>
            Add Task
          </Text>
        </Button>
      </View>
    </Box>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
  },
  cat: {
    borderWidth: 1,
    borderColor: Colors.buttonColourblue,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  selectedStyle: {
    backgroundColor: "#eeeff0",
    borderColor: "#eeeff0",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  deadline: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 10,
  },
});
