import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const BookCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>A Million To One</Text>
        <Text style={styles.author}>Tony Faggioli</Text>
        <Text style={styles.price}>Rs. 500</Text>
      </View>

      <View style={styles.editDelete}>
        <TouchableOpacity style={styles.circle}>
          <MaterialIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}>
          <Feather name="edit-2" size={20} color="#3338A0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BookCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: s(10),
    elevation: s(3),
    paddingVertical: vs(10),
    shadowColor: "#000",
    shadowOffset: { width: s(0), height: s(2) },
  },
  image: {
    width: s(100),
    height: vs(100),
    resizeMode: "contain",
  },
  title: {
    fontSize: s(18),
    fontWeight: "bold",
  },
  author: {
    fontSize: s(14),
    color: "grey",
  },
  price: {
    fontSize: s(16),
    color: "#3338A0",
    marginTop: s(10),
    fontWeight: "600",
  },
  editDelete: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(5),
  },
  circle: {
    width: s(35),
    height: s(35),
    borderRadius: s(17),
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
});
