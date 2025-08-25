import { StyleSheet, Text,TouchableOpacity, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

const BookAdd = ({onPressClose}) => {
  return (
    <View style={{ paddingVertical: vs(20), paddingHorizontal: s(17) }}>
      <TouchableOpacity onPress={onPressClose}>
        <AntDesign name="closesquare" size={34} color="#ED3500" />
      </TouchableOpacity>
    </View>
  );
};
export default BookAdd;
const styles = StyleSheet.create({});
