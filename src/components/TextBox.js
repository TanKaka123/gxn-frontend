import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";

const TextBox = ({ content, nextPageUrl, navigation }) => {
  return (
    <TouchableOpacity
      style={style.textBox}
      onPress={() => navigation.navigate(nextPageUrl)}
    >
      <Text style={style.text}>{content}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  textBox: {
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    width: "38%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    margin: "2%",
  },
  text: {
    fontSize: FontSizes.secondaryFS,
    textAlign: "center",
  },
});
export default TextBox;
