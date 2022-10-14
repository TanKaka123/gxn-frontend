import { View } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";

const Line = () => {
  return (
    <View
      style={{
        flex: 1,
        borderTopColor: Colors.secondaryColor,
        borderTopWidth: 1,
        width: "100%",
      }}
    />
  );
};

export default Line;
