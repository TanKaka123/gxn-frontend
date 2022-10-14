import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";
import ArrowNextS from "../assets/icons/ArrowNextSmall";

const ButtonBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
      
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
      onPress={() => navigation.goBack()}
    >
      <ArrowNextS width={15} height={20} fill={Colors.secondaryColor} />
      <Text
        style={{
          color: Colors.secondaryColor,
          fontSize: FontSizes.secondaryFS,
          marginLeft: 4,
        }}
      >
        Trở lại
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBack;
