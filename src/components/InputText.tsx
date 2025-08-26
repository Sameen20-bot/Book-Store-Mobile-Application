import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { vs, s } from "react-native-size-matters";

const InputText = ({ value, onChangeText, placeholder, onFocus, selects}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        onFocus={onFocus}
        style={[styles.inputs, selects && styles.active]}
      />
    </View>
  );
};
export default InputText;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    elevation: 10,
    marginBottom: s(15),
  },
  inputs: {
    fontSize: s(16),
    borderColor: "grey",
    borderWidth: s(2),
    borderRadius: s(5),
    width: "100%",
    height: vs(45),
  },
  active: {
    borderColor: "#001BB7",
    borderWidth: s(2),
  },
});
