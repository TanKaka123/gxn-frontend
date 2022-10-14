import { Pressable, Image, Text, View, StyleSheet} from "react-native";
import { FontSizes } from "../../../assets/font/Font";
import { LinearGradient } from "expo-linear-gradient";
import ArrowNext from "../../../assets/icons/ArrowNext";

const ButtonBox = () => {
return (
    <Pressable style={{ marginTop: 20, alignItems: "center" }}>
    <LinearGradient
        colors={["#d36d23", "#fbd4a9"]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 1, y: 1 }}
        style={style.linear_gradient}
    >
        <View style={{ justifyContent: "space-between", height: "80%" }}>
        <Text style={style.text_box}>CHỌN THỰC ĐƠN CỦA MẸ</Text>
        <View style={style.container_btn_box}>
            <Text style={style.text_btn_box}>Thiết kế ngay</Text>
            <ArrowNext width={15} height={23} fill="white" />
        </View>
        </View>

        <Image
        style={{ width: 135, height: 125 }}
        source={require("../../../assets/images/ChooseMenu.png")}
        />
    </LinearGradient>
    </Pressable>
);
};


const style = StyleSheet.create({
text_btn_box: {
    color: "white",
    fontSize: FontSizes.secondaryFS,
    fontWeight: "600",
},
text_box: {
    color: "white",
    fontSize: FontSizes.primaryFS,
    fontWeight: "700",
    maxWidth:200
},
container_btn_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
},
linear_gradient: {
    height: 180,
    width: "90%",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
},
});


export default ButtonBox;