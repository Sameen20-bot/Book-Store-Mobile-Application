import axios from "axios";
import { Alert } from "react-native";

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
    name_of_author: "Zaki Ahmed",
    cover: "https://cdn.europosters.eu/image/1300/214933.jpg",
    email_of_seller: "zaki@hotmail.com",
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

  const updateBook = async () => {
    try {
      const response = await axios.put(`${endPointURL}/10`, body);
      Alert.alert("Book has been updated");
      getListOfBooks();
    } catch (error) {
      console.log(error);
    }
  };