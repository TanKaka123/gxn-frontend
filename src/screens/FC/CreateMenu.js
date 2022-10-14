import { Pressable, Image } from "react-native";

const WelcomeFC = ({ navigation }) => {
  return (
    <Pressable >
        <Image
            style={{ width: '100%', height: '100%' }}
            source={require("../../assets/images/CreateMenu.png")}
            />
    </Pressable>
   
  );
};

export default WelcomeFC;
