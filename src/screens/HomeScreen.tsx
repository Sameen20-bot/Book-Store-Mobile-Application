import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BookCard from "../components/BookCard";
import { vs,s } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BookCard />
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({ 
  container: {
    paddingHorizontal: s(17),
    marginTop: vs(40),
  } 
});
