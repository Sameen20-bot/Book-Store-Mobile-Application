import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs, s } from "react-native-size-matters";

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>ADD THE BOOK</Text>
    </TouchableOpacity>
  );
};
export default ButtonAdd;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001BB7",
    alignItems: "center",
    justifyContent: "center",
    height: s(40),
    borderRadius: s(10),
  },
  text:{
    color: 'white',
    fontSize: s(18),
    fontWeight: 'bold',
  }
});
