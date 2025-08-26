import axios from "axios";
import { Alert } from "react-native";

  const endPointURL = "https://68aad3eb909a5835049d18b7.mockapi.io/books";

  export const getListOfBooks = async ({onSuccess,onError}) => {
    try {
      const response = await axios.get(endPointURL);
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const getBookByID = async ({onSuccess,onError}) => {
    try {
      const response = await axios.get(endPointURL + "/3");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const deleteBookByID = async ({onSuccess,onError, itemID}) => {
    try {
      const deleted = await axios.delete(`${endPointURL}/${itemID}`);
      Alert.alert("Book is deleted successfully");
      onSuccess && onSuccess(deleted.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const createBook = async ({body,onSuccess,onError}) => {
    try {
      const response = await axios.post(endPointURL, body);
      Alert.alert("Book has been created");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };

  export const updateBook = async ({onSuccess,onError, ID, body}) => {
    try {
      const response = await axios.put(`${endPointURL}/${ID}`, body);
      Alert.alert("Book has been updated");
      onSuccess && onSuccess(response.data)
    } catch (error) {
      onError && onError(error)
      console.log(error);
    }
  };