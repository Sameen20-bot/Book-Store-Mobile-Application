import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { vs, s } from "react-native-size-matters";

const AddButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <AntDesign name="plus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default AddButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001BB7",
    alignItems: "center",
    justifyContent: "center",
    height: s(80),
    width: s(80),
    borderRadius: s(45),
    position: 'absolute',
    bottom: s(20),
    alignSelf: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: s(0), height: s(2) },
  },
});
