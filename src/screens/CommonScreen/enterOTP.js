import { Text, Image, View, StyleSheet, Keyboard } from "react-native";
import { FontSizes } from "../../assets/font/Font";
import { Colors } from "../../assets/color/Colors";
import InputOTP from "../../components/inputOTP";
import Buttons from "../../components/Button";
import { useState, useEffect } from "react";

const SignupSuccess = ({ navigation }) => {
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

  return (
    <View style={style.body}>
        <View style={style.image}>
            <Image style={{ width: 120, height: 135 }}
              source={require("../../assets/images/logoCNN.png")}
            />
        </View>
        <View style={style.content}>
            { !isKeyboardVisible && (
              <Text style={style.title}>Về nhà với mẹ, ăn CƠM NHÀ NHA!</Text>
            )}
            <View style={{ alignItems: "center" }}>
                { !isKeyboardVisible && (
                  <>
                    <Text style={[style.text_request]}>
                      Nhập mã pin gồm 4 số được gửi đến
                    </Text>
                    <Text style={[ style.text_request, { fontWeight: "700", paddingBottom: 10 }]}>
                      +84 1234 4567
                    </Text>
                  </>
                )}
                <InputOTP />
            </View>
            <View style={style.footer}>
                <Text style={style.text_sendotp}>Gửi lại mã OTP</Text>
                    <Buttons
                      content="tiếp tục"
                      nextPageUrl={"EnterName"}
                      navigation={navigation}
                    />
            </View>
        </View>
    </View>
  );
};
const style = StyleSheet.create({
  body: {
    flex: 1,
  },
  image: {
    height: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 40,
  },
  footer: { 
    justifyContent: "flex-end", 
    alignItems: "center", 
    paddingTop: 20 
  },
  title: {
    color: Colors.secondaryColor,
    fontSize: FontSizes.primaryFS,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 10,
  },
  text_request: {
    fontSize: FontSizes.font3th,
    textAlign: "center",
  },
  text_sendotp: {
    paddingBottom: 20,
    fontWeight: "700",
    fontSize: FontSizes.font3th,
    color: Colors.secondaryColor,
  }
});

export default SignupSuccess;
