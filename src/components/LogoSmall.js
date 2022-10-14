import { Image } from "react-native";

const LogoSmall = () => {
  return (
    <Image
      style={{ width: 120, height: 135 }}
      source={require("../assets/images/logoCNN.png")}
    />
  );
};

export default LogoSmall;
