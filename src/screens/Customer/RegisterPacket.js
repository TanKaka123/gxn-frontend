import { ScrollView, Text, View, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import Search from "../../assets/icons/Search";
import { ListDishForUser } from "../../assets/json/ListDishForUser";
import FreelanceCook from "../../assets/icons/FreelanceCook";
import Money from "../../assets/icons/Money";
import StarFull from "../../assets/icons/Stars";


const InputComponent=()=>{
    return(
        <View  style={{paddingHorizontal:20, marginVertical:20}}>
        <TextInput
          style={style.input}
          placeholder="Tìm kiếm Freelance driver"
        ></TextInput>
        <View style={{ position: "absolute", bottom: "10%", marginLeft: 40 }}>
          <Search width={40} height={30} color={Colors.secondaryColor} />
        </View>
      </View>
    )
}

const HomePage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={style.wrapper_heading}>
        <Text style={style.headding_title}>
            NHỚ ĂN UỐNG ĐẦY ĐỦ NHA CON 
        </Text>
      </View>
      <Text style={[style.title, { marginTop: 55, fontWeight: "700" }]}>
        Chọn thực đơn
      </Text>
     <InputComponent/>
   
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
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 70,
    paddingVertical: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    fontSize: 16,
    borderColor:Colors.secondaryColor,
    borderWidth:1, 
  },
});

export default HomePage;
