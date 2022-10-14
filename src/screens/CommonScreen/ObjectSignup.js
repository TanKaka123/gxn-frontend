import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontSizes } from "../../assets/font/Font";
import { Colors } from "../../assets/color/Colors";

const SelectObject = ({ navigation }) => {
  return (
    <View style={style.body}>
      <View style={style.image}>
        <Image style={{ width: 170, height: 190 }}
          source={require("../../assets/images/logoCNN.png")}
        />
      </View>
      <Text style={style.text_validate}>Bạn muốn trở thành</Text>
      <View style={style.list_box}>
        <TouchableOpacity style={style.textbox}
          onPress={() => navigation.navigate("WelcomeFC")}
        >
            <Image style={{ width: 80, height: 80 }}
                source={require("../../assets/images/chef.png")}
            />
            <Text style={style.text}>ĐẦU BẾP{'\n'} TỰ DO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.textbox}
          onPress={() => navigation.navigate("EnterPhoneCus")}
        >
            <Image style={{ width: 80, height: 80 }}
                source={require("../../assets/images/user.png")}
            />
            <Text style={style.text}>NGƯỜI ĐẶT{'\n'} ĐỒ ĂN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.textbox}
          onPress={() => navigation.navigate("GoPhotoShip")}
        >
            <Image style={{ width: 80, height: 80 }}
                source={require("../../assets/images/shipper.png")}
            />
            <Text style={style.text}>SHIPPER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
    body:{ 
        flex: 1 
    },
    image: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text_validate: {
        textAlign: "center",
        fontSize: FontSizes.primaryFS,
        marginBottom: 20,
    },
    list_box: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    textbox: {
        borderColor: Colors.secondaryColor,
        borderWidth: 2,
        width: "30%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        margin: "1%",
    },
    text: {
        fontSize: FontSizes.secondaryFS,
        textAlign: "center",
    },
});
export default SelectObject;
