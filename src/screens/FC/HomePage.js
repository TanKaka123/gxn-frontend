import {
  Pressable,
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Colors } from "../../assets/color/Colors";
import Search from "../../assets/icons/Search";
import { FontSizes } from "../../assets/font/Font";
import { LinearGradient } from "expo-linear-gradient";
import ArrowNext from "../../assets/icons/ArrowNext";
import { DATASTORIRES } from "../../assets/json/Stories";
import { useState, useEffect } from "react";


const InputComponent = () => {
  return (
    <View style={{ position: "absolute", bottom: -40 }}>
      <TextInput
        style={style.input}
        placeholder="Tìm kiếm freelance cook"
      ></TextInput>
      <View style={{ position: "absolute", bottom: "25%", marginLeft: 15 }}>
        <Search width={40} height={30} color={Colors.secondaryColor} />
      </View>
    </View>
  );
};


const ButtonBox = () => {

  return (
    <Pressable style={{ marginTop: 20, alignItems: "center" }}>
      <LinearGradient colors={["#d36d23", "#fbd4a9"]} start={{ x: 0, y: 0.8 }}  end={{ x: 1, y: 1 }}
        style={{
          height: 180,
          width: "90%",
          padding: 5,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "space-between", height: "80%" }}>
          <Text
            style={{
              color: "white",
              fontSize: FontSizes.primaryFS,
              fontWeight: "700",
            }}
          >
            TẠO THỰC ĐƠN
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: FontSizes.secondaryFS,
                fontWeight: "600",
              }}
            >
              Thiết kế ngay
            </Text>
            <ArrowNext width={15} height={23} fill="white" />
          </View>
        </View>

        <Image
          style={{ width: 135, height: 120 }}
          source={require("../../assets/images/CreateMenu.png")}
        />
      </LinearGradient>
    </Pressable>
  );
}; 

const HomePage = ({ navigation }) => {

  const [dataStories, setDataStories] = useState([]);
  const [startIndex, setStartIndex] = useState(3)
  useEffect(()=>{
    // setDataStories(current => [...current, DATASTORIRES[0], DATASTORIRES[1], DATASTORIRES[2]])
    // setStartIndex(startIndex+3)
    setDataStories(DATASTORIRES.slice(0,3));
  },[])

  return (
    <ScrollView>
      <View style={style.wrapper_heading}>
        <Text style={{ fontWeight: "700", fontSize: 17, color: "white" }}>
          Nhớ ăn uống đầy đủ nha con{" "}
        </Text>
        <InputComponent />
      </View>
      <Text style={[style.title,{marginTop: 55, fontWeight: "700",}]} >
        Xin chào
      </Text>
      <Text style={[style.title,{fontWeight:'400'}]} >
        Hôm nay chị sẽ nấu món gì ?
      </Text>
      <ButtonBox />
      <Text style={[style.title,{marginTop:55,fontWeight: "700", textAlign:'left', paddingHorizontal:'5%'}]}>Chia sẻ từ những đầu bếp tự do của CƠM NHÀ NHA</Text>
      <Text style={style.desc}>Những chia sẻ về thuận lợi, khó khăn của FC</Text>
 
      {
        
        dataStories && dataStories.map((value, index)=>{
          return (
            <View key={index} style={{flexDirection:'row', alignItems:'center', padding:'5%'}}>
                <Image
                  style={[value.censorship && style.border,{ width: 100, height: 100, borderRadius: 100}]}
                  source={{uri:value.avatar}}
                />
                <View style={{paddingHorizontal:'5%', justifyContent:'space-around',height: 100}}>
                  <Text style={{fontWeight:'700', fontSize:FontSizes.secondaryFS}}>{value.nameFC}</Text>
                  <Text style={{width:'40%'}}>{value.story}</Text>
                </View>
               
            </View>
          )
        })
      } 
    { DATASTORIRES[startIndex] && <TouchableOpacity style={{marginVertical:30, flexDirection:'row', justifyContent:'center'}} 
        onPress={()=>{
          setDataStories(current => [...current, DATASTORIRES[startIndex]])
        
                     }}>
        <Text style={{ fontSize: FontSizes.secondaryFS, fontWeight:'600', color:Colors.secondaryColor}}>
          Xem thêm
        </Text>
        <View style={{paddingHorizontal:10,transform:[{ rotate: "90deg" }]}}>
          <ArrowNext width={15} height={23} fill={Colors.secondaryColor} />
        </View>
      </TouchableOpacity>}
                   
    </ScrollView>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 70,
    paddingVertical: 20,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    fontSize: 16,
  },
  wrapper_heading: {
    width: "100%",
    height: 120,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title:{ 
    color: Colors.secondaryColor,
    textAlign: "center",  
    fontSize: FontSizes.secondaryFS
  },
  desc:{
    color :'#958E8E',
    fontWeight: "400", 
    textAlign:'left', 
    paddingHorizontal:'5%',
    marginVertical:5
  },
  border:{
    borderColor:'green',
    borderWidth:2
  }
});

export default HomePage;
