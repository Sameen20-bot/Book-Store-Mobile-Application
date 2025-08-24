import axios from "axios";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [bookList, setBookList] = useState([]);

  const endPointURL = "https://68aad3eb909a5835049d18b7.mockapi.io/books";

  const getListOfBooks = async () => {
    try {
      const response = await axios.get(endPointURL);
      console.log(response.data);
      setBookList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookByID = async () => {
    try {
      const response = await axios.get(endPointURL + "/3");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookByID = async () => {
    try {
      const deleted = await axios.delete(`${endPointURL}/7`);
      Alert.alert("Book 7 is deleted sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const body = {
    name_of_author: "Sameen Zaki",
    cover:
      "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
    email_of_seller: "sameenu@hotmail.com",
    price_of_book: 100,
  };

  const createBook = async () => {
    try {
      const response = await axios.post(endPointURL, body);
      Alert.alert("Book has been created");
      getListOfBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="Get Books"
        onPress={getListOfBooks}
      /> */}
      <Button title="Get Books" onPress={getListOfBooks} />
      <Button title="Delete Book" onPress={deleteBookByID} />
      <Button title="Create Book" onPress={createBook} />
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name_of_author}</Text>
            <Text>{item.price_of_book}</Text>
            <Image
              style={{ height: 150, width: 150 }}
              source={{ uri: item.cover }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
