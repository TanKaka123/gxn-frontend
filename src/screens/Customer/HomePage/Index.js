import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../../../assets/color/Colors";
import { FontSizes } from "../../../assets/font/Font";



const HomePage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={style.wrapper_heading}>
        <Text style={style.headding_title}>
        NỀN TẢNG ĐI NHỜ XE MÁY
        </Text>
      </View>
      <Text style={[style.title, { marginVertical: 35, fontWeight: "700" }]}>
      Chào mừng bạn đến với ứng dụng ĐI NHỜ NHA
      </Text>

      <Image
        style={{ width: '100%', flex: 1 }}
        source={require("../../../assets/images/banner.png")}
        />
        <View style={{marginVertical:20}}></View>
      <Image
        style={{ width: '100%', flex: 1 }}
        source={require("../../../assets/images/about.png")}
        />
        <View style={{marginVertical:20}}></View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper_heading: {
    width: "100%",
    height: 120,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: Colors.secondaryColor,
    textAlign: "center",
    fontSize: FontSizes.secondaryFS,
  },
  headding_title:{ 
    fontWeight: "700", 
    fontSize: 17, 
    color: "white" 
  },
  desc:{
    color :'#958E8E',
    fontWeight: "400", 
    textAlign:'left', 
    paddingHorizontal:'5%',
    marginVertical:5
  },
  tile_position:{
    marginTop:55,
    fontWeight: "700", 
    textAlign:'left', 
    paddingHorizontal:'5%'
  }
});

export default HomePage;
