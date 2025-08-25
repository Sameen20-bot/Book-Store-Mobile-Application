import { FlatList, Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BookCard from "../components/BookCard";
import { vs, s } from "react-native-size-matters";
import { SetStateAction, useEffect, useState } from "react";
import { deleteBookByID, getListOfBooks } from "../api/config";
import AddButton from "../components/AddButton";
import BookAdd from "../components/BookAdd";

const HomeScreen = () => {
  const [book, setBooklist] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getListOfBooks({
      onSuccess: (books: any) => setBooklist(books),
      onError: (err: any) => console.log(err),
    });
  }, []);

  const onDeleteItem = (item) => {
    console.log(item.id);
    deleteBookByID({
      onSuccess: () => {
        getListOfBooks({
          onSuccess: (books: any) => setBooklist(books),
          onError: (err: any) => console.log(err),
        });
      },
      onError: (err: any) => console.log(err),
      itemID: item.id,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={book}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: s(100) }}
        renderItem={({ item }) => (
          <BookCard
            imageUri={item.cover}
            titles={item.title}
            authors={item.name_of_author}
            prices={item.price_of_book}
            onDeleteItem={() => onDeleteItem(item)}
          />
        )}
      />
      <AddButton onPress={()=> setVisible(true)}/>
      <Modal visible={visible}>
        <BookAdd onPressClose={()=> setVisible(false)}/>
      </Modal>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(17),
    marginTop: vs(40),
  },
});
