import {
  Text,
  Image,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FontSizes } from "../../assets/font/Font";
import { Colors } from "../../assets/color/Colors";
import { Styles } from "../../style/Style";
import PhoneInput from "react-native-phone-number-input";
import Question from "../../assets/icons/Question";
import Call from "../../assets/icons/Call";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const LogIn = ({ navigation }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (token) {
      SecureStore.setItemAsync("secure_token", { token });
      navigation.navigate("EnterOTP");
    }
  });
  const [numberPhone, setNumberPhone] = useState("");
  const [token, setToken] = useState(null);

  const postAccount = async () => {
    await fetch("https://comnhanha.herokuapp.com/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNumber: numberPhone,
      }),
    })
      .then((res) => res.json())
      .then((res) => setToken(res.token))
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
  };
  const Buttons = ({ content, nextPageUrl, navigation }) => {
    return (
      <TouchableOpacity style={style.btn} onPress={() => postAccount()}>
        <Text style={style.text}>{content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.body}>
        <View style={style.title_image}>
            <Image style={{ width: 120, height: 135 }}
                source={require("../../assets/images/logoCNN.png")}
            />
            <Text style={[Styles.titleCNN, { marginTop: 10 }]}> Đăng nhập </Text>
            <Text style={Styles.titleCNN}> CƠM NHÀ NHA! </Text>
        </View>

        <View style={style.wrapper_content} >
            <Text style={style.title_intro}> Nhập số điện thoại </Text>
            <PhoneInput
                placeholder="Số điện thoại của bạn"
                autoFocus={true}
                containerStyle={style.view_phone}
                textContainerStyle={{ backgroundColor: "transparent" }}
                codeTextStyle={{ color: Colors.secondaryColor }}
                defaultCode="VN"
                onChangeText={(text) => { setNumberPhone(text) }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("ObjectSignup")}>
                <Text style={style.text_register} >
                    Tôi chưa có tài khoản
                </Text>
            </TouchableOpacity>
            <Buttons content="Tiếp tục" navigation={navigation} nextPageUrl="EnterOTP" />
        </View>

        {!isKeyboardVisible && (
            <View style={style.wrapper_contact}>
                <View style={[style.wrapperContact, { justifyContent: "flex-end" }]}>
                    <Question width={25} height={25} fill={Colors.secondaryColor} />
                    <Text> Hỏi đáp </Text>
                </View>
                <View style={[style.wrapperContact, { justifyContent: "flex-start" }]} >
                    <Call width={25} height={25} fill={Colors.secondaryColor} />
                    <Text> Liên hệ </Text>
                </View>
            </View>
        )}
    </View>
  );
};
const style = StyleSheet.create({
  wrapper_contact: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text_register:{
    fontSize: FontSizes.font3th,
    fontWeight: "700",
    color: Colors.secondaryColor,
  },
  wrapperContact: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  },
  title_image: {
    height: "45%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper_content:{
    height:'45%',
    alignItems: "center",
    justifyContent: "space-around",
  },
  title_intro: {
    fontSize: FontSizes.secondaryFS,
  },
  view_phone: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    borderColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    borderEndColor: "white",
    borderEndWidth: 4,
    borderStartColor: "white",
    borderStartWidth: 4,
  },
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
export default LogIn;
