import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import InputText from "./InputText";
import ButtonAdd from "./ButtonAdd";
import { createBook, updateBook } from "../api/config";

const BookAdd = ({ onPressClose, onCreateSuccess, selectedItem }) => {
  const [select, setSelect] = useState(false);

  const [data, setData] = useState({
    title: selectedItem?.title ?? "",
    author: selectedItem?.name_of_author ?? "",
    price: String(selectedItem?.price_of_book ?? ""),
    image: selectedItem?.cover ?? "",
  });

  const handleInput = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const createsBook = () => {
    createBook({
      body: {
        name_of_author: data.author,
        cover: data.image,
        price_of_book: data.price,
        title: data.title,
      },
      onSuccess: () => {
        onPressClose(), onCreateSuccess();
      },
      onError: (err) => {
        Alert.alert("Error happen");
      },
    });
  };

  const editBook = () => {
    updateBook({
      ID: selectedItem?.id,
      body: {
        name_of_author: data.author,
        cover: data.image,
        price_of_book: data.price,
        title: data.title,
      },
      onSuccess: () => {
        onPressClose();
        onCreateSuccess();
      },
      onError: (err) => {
        Alert.alert("Error happen");
      },
    });
  };

  return (
    <View style={{ paddingVertical: vs(20), paddingHorizontal: s(17) }}>
      <TouchableOpacity onPress={onPressClose}>
        <AntDesign name="closesquare" size={34} color="#ED3500" />
      </TouchableOpacity>
      <Text style={styles.title}>BOOK DETAILS</Text>
      <InputText
        placeholder={"Enter Book Title"}
        value={data.title}
        onChangeText={(text) => handleInput("title", text)}
        onFocus={() => setSelect("title")}
        selects={select === "title"}
      />
      <InputText
        placeholder={"Enter Book Author"}
        value={data.author}
        onChangeText={(text) => handleInput("author", text)}
        onFocus={() => setSelect("author")}
        selects={select === "author"}
      />
      <InputText
        placeholder={"Enter Book Price"}
        value={data.price}
        onChangeText={(text) => handleInput("price", text)}
        onFocus={() => setSelect("price")}
        selects={select === "price"}
      />
      <InputText
        placeholder={"Enter Book Cover Url"}
        value={data.image}
        onChangeText={(text) => handleInput("image", text)}
        onFocus={() => setSelect("image")}
        selects={select === "image"}
      />
      <ButtonAdd onPress={selectedItem ? editBook : createsBook} />
    </View>
  );
};
export default BookAdd;
const styles = StyleSheet.create({
  title: {
    fontSize: s(20),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: s(30),
  },
});
