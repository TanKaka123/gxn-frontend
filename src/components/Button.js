import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";

const Button = ({ content, nextPageUrl, navigation }) => {
  return (
    <TouchableOpacity
      style={style.btn}
      onPress={() => navigation.navigate(nextPageUrl)}
    >
      <Text style={style.text}>{content}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  btn: {
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    paddingRight: 100,
    paddingLeft: 100,
    borderRadius: 40,
  },
  text: {
    fontSize: FontSizes.secondaryFS,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

export default Button;
