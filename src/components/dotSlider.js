import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";

const DotSlider = ({ listPage, currNumberPage, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
      {listPage.map((index, value) => {
        return (
          <TouchableOpacity
            key={value}
            style={[
              style.general,
              currNumberPage - 1 == value ? style.fill : "",
            ]}
            onPress={() => navigation.navigate(index)}
          ></TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  general: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  fill: {
    backgroundColor: Colors.secondaryColor,
  },
});
export default DotSlider;
