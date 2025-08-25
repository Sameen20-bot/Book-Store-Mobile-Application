import axios from "axios";
import { Alert } from "react-native";

  const endPointURL = "https://68aad3eb909a5835049d18b7.mockapi.io/books";

  export const getListOfBooks = async ({onSuccess,onError}) => {
    try {
      const response = await axios.get(endPointURL);
      console.log(response.data);
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const getBookByID = async ({onSuccess,onError}) => {
    try {
      const response = await axios.get(endPointURL + "/3");
      console.log(response.data);
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const deleteBookByID = async ({onSuccess,onError, itemID}) => {
    try {
      const deleted = await axios.delete(`${endPointURL}/${itemID}`);
      Alert.alert("Book 7 is deleted sucessfully");
      onSuccess && onSuccess(deleted.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  const body = {
    name_of_author: "Zaki Ahmed",
    cover: "https://cdn.europosters.eu/image/1300/214933.jpg",
    email_of_seller: "zaki@hotmail.com",
    price_of_book: 100,
  };

  export const createBook = async ({onSuccess,onError}) => {
    try {
      const response = await axios.post(endPointURL, body);
      Alert.alert("Book has been created");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const updateBook = async ({onSuccess,onError}) => {
    try {
      const response = await axios.put(`${endPointURL}/10`, body);
      Alert.alert("Book has been updated");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };