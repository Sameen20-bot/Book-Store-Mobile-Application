import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { vs, s } from "react-native-size-matters";
import { Image } from "expo-image";

const BookCard = ({ imageUri, titles, authors, prices, onDeleteItem }) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageUri}
        style={styles.image}
        cachePolicy="disk"
        transition={300}
      />

      <View style={styles.rightSide}>
        <View style={styles.texts}>
          <Text style={styles.title}>{titles}</Text>
          <Text style={styles.author}>{authors}</Text>
          <Text style={styles.price}>Rs. {prices}</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.circle} onPress={onDeleteItem}>
            <MaterialIcons name="delete-outline" size={20} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Feather name="edit-2" size={20} color="#3338A0" />
          </TouchableOpacity>
        </View>
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
    padding: s(10),
    margin: s(10),
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: s(0), height: s(2) },
    alignItems: "center",
  },
  image: {
    width: s(100),
    height: s(100),
    resizeMode: "contain",
    marginRight: 10,
  },
  rightSide: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texts: {
    flexShrink: 1,
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
    fontSize: s(18),
    color: "#3338A0",
    marginTop: s(5),
    fontWeight: "600",
  },
  buttons: {
    flexDirection: "row",
    gap: 6,
  },
  circle: {
    width: s(35),
    height: s(35),
    borderRadius: s(18),
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
