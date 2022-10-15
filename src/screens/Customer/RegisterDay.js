import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView, Pressable, Image } from "react-native";
import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import Search from "../../assets/icons/Search";
import ArrowNextS from "../../assets/icons/ArrowNextSmall";
import { DataAddr } from "../../components/DataAddress";
import { useState } from "react";
import Close from "../../assets/icons/Close";
import Stars from "../../assets/icons/Stars";
const DropdownElement = ({
  showOption,
  setShowOption,
  valueDropdown,
  content,
}) => {
  return (
    <TouchableOpacity
      style={style.dropdown}
      onPress={() => {
        setShowOption(!showOption);
      }}
    >
      <Text style={[style.textDropdown,{marginRight:20}]}>
        {valueDropdown != null ? valueDropdown : content}
      </Text>
      <View style={{ transform: [{ rotate: "-90deg" }] }}>
        <ArrowNextS width={15} height={20} fill={Colors.secondaryColor} />
      </View>
    </TouchableOpacity>
  );
};


const DropdownProvince = ({
  showOption,
  setShowOption,
  onChangeTextSearch,
  textSearch,
  DataAddr,
  setValueDropdown,
  setDistrict,
  setValueDistric,
}) => {
  return (
    <>
      {showOption && (
        <View style={style.optionDropdown}>
          <SafeAreaView style={{ width: "100%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={style.inputSearch}
                onChangeText={onChangeTextSearch}
                value={textSearch}
                placeholder="Nhập tên địa điểm"
                placeholderTextColor={Colors.secondaryColor}
              />
              <Pressable
                onPress={() => {
                  setShowOption(false);
                  onChangeTextSearch("");
                }}
              >
                <Close width={20} height={20} color={Colors.secondaryColor} />
              </Pressable>
            </View>
            <ScrollView>
              {DataAddr.filter((value, index) => {
                if (
                  textSearch == "" ||
                  value.name.toLowerCase().includes(textSearch.toLowerCase())
                )
                  return value;
              }).map((value, index) => {
                return (
                  <TouchableOpacity
                    style={style.itemOption}
                    onPress={() => {
                      setValueDropdown(value.name);
                      setShowOption(false);
                      setDistrict(value.districts);
                      onChangeTextSearch("");
                      setValueDistric(null);
                    }}
                    key={index}
                  >
                    <Text>{value.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
    </>
  );
};


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
  const [showOptionStartPoint, setShowOptionStartPoint] = useState(false);
  const [valueDropdownStartPoint, setValueDropdownStartPoint] = useState(null);
  const [valueStartPoint, setValueStartPoint] = useState(null);
  const [startPoint, setStartPoint] = useState([]);
  const [textSearchStartPoint, onChangeTextSearchStartPoint] = useState("");

  const [showOptionEndPoint, setShowOptionEndPoint] = useState(false);
  const [valueDropdownEndPoint, setValueDropdownEndPoint] = useState(null);
  const [valueEndPoint, setValueEndPoint] = useState(null);
  const [endPoint, setEndPoint] = useState([]);
  const [textSearchEndPoint, onChangeTextSearchEndPoint] = useState("");


  const ListDriver=[
    {
        id:1,
        name : 'Nguyễn Hồng Tấn',
        licensePlate : '71-C4 09899',
        startPoint :'Kí túc xá UEH - Trần Hưng Đạo',
        endPoint :'Đại Học UEH - cs Nguyễn Tri Phương',
        distance : 4,
        cost : 12000
    },
    {
        id:2,
        name : 'Nguyễn Phúc Trung',
        licensePlate : '99-H7 7060',
        startPoint :'Kí túc xá UEH - Trần Hưng Đạo',
        endPoint :'Đại Học UEH - cs Nguyễn Tri Phương',
        distance : 4,
        cost : 12000
    },
    {
        id:3,
        name : 'Khoa Huân',
        licensePlate : '28-AA 09658',
        startPoint :'Kí túc xá UEH - Trần Hưng Đạo',
        endPoint :'Đại Học UEH - cs Nguyễn Tri Phương',
        distance : 4,
        cost : 12000
    },
    
]
  return (
    <ScrollView >
      <View style={style.wrapper_heading}>
        <Text style={style.headding_title}>
        NỀN TẢNG ĐI NHỜ XE MÁY
        </Text>
      </View>
      <Text style={[style.title, { marginTop: 55, fontWeight: "700" }]}>
        Chọn tài xế
      </Text>
     <InputComponent/>
     <DropdownProvince
        showOption={showOptionStartPoint}
        setShowOption={setShowOptionStartPoint}
        onChangeTextSearch={onChangeTextSearchStartPoint}
        textSearch={textSearchStartPoint}
        DataAddr={DataAddr}
        setValueDropdown={setValueDropdownStartPoint}
        setDistrict={setStartPoint}
        setValueDistric={setValueStartPoint}
      />

<DropdownProvince
        showOption={showOptionEndPoint}
        setShowOption={setShowOptionEndPoint}
        onChangeTextSearch={onChangeTextSearchEndPoint}
        textSearch={textSearchEndPoint}
        DataAddr={DataAddr}
        setValueDropdown={setValueDropdownEndPoint}
        setDistrict={setEndPoint}
        setValueDistric={setValueEndPoint}
      />
     <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 3,
      }}
    >
   
      <DropdownElement
            showOption={showOptionStartPoint}
            setShowOption={setShowOptionStartPoint}
            valueDropdown={valueDropdownStartPoint}
            content="Điểm xuất phát"
          />
          <View style={{marginVertical:10}}></View>
            <DropdownElement
            showOption={showOptionEndPoint}
            setShowOption={setShowOptionEndPoint}
            valueDropdown={valueDropdownEndPoint}
            content="Điểm đến"
          />
      {
        ListDriver && ListDriver.filter((value, index) => {
          if (
            valueDropdownStartPoint && valueDropdownEndPoint &&
            value.startPoint.toLowerCase().includes(valueDropdownStartPoint.toLowerCase())
            && 
            value.endPoint.toLowerCase().includes(valueDropdownEndPoint.toLowerCase())
          )
            return value;
        }).map((value, index)=>{
          return (
            <Pressable style={{width:'100%', flexDirection:'row', justifyContent:'space-around',alignItems:'flex-start', paddingVertical:10}} key={index}
            onPress={() => navigation.navigate("Validate")}>
               <View style={{marginRight:-50}}>
                    <Image
                    style={{ width: 120, height: 120 }}
                    source={require("../../assets/images/avatar_driver.png")}
                  />
                  <Pressable style={{backgroundColor: Colors.secondaryColor, paddingVertical:7, borderRadius:5}}>
                    <Text style={{ textAlign:'center', color: 'white', fontWeight:'700'}}>Book</Text>
                  </Pressable>
               </View>

              
        <View >
          <View style={{ flexDirection:'row', justifyContent: "space-between",alignItems:'center'}} >
            <Text style={style.titleText}>Họ tên</Text>
            <Text style={{marginLeft:15}}>{value.name}</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent: "space-between",alignItems:'center'}} >
            <Text style={style.titleText}>Biển số</Text>
            <Text>{value.licensePlate}</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent: "space-between",alignItems:'center'}} >
            <Text style={style.titleText}>Khoảng cách</Text>
            <Text>{value.distance} Km</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent: "space-between", alignItems:'center'}} >
            <Text style={style.titleText}>Đánh giá</Text>
            <View style={{ flexDirection:'row'}}>
              <Stars  width={20} height={20} color="#FFD041"/>
              <Stars  width={20} height={20} color="#FFD041"/>
              <Stars  width={20} height={20} color="#FFD041"/>
              <Stars  width={20} height={20} color="#FFD041"/>
              <Stars  width={20} height={20} color="#FFD041"/>
            </View>

            
          </View>

        </View>
            </Pressable>

          )
        })
      }
     
      </View>
     
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
  titleText:{
    color:Colors.secondaryColor, 
    fontWeight:'700', fontSize:17},
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
  dropdown: {
    padding: 10,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textDropdown: {
    color: Colors.secondaryColor,
    fontWeight: "500",opacity:0.8
    // opacity:'0.8'
  },
  optionDropdown: {
    position: "absolute",
    flex: 1,
    backgroundColor: "white",
    zIndex: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    alignItems: "flex-start",
    // borderColor:Colors.secondaryColor,
    // borderWidth:2,
    // borderRadius:5,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
  },
  itemOption: {
    borderColor: Colors.secondaryColor,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    maxWidth: "95%",
  },
  inputSearch: {
    borderWidth: 1,
    paddingTop:20,
    padding: 5,
    borderColor: "white",
    minWidth: "90%",
    borderRadius: 5,
    fontWeight: "500",
    marginBottom: 10,
    fontSize: 16,
    opacity: 0.7,
  },
  btn: {
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    paddingRight: 90,
    paddingLeft: 90,
    borderRadius: 40,
  },
  text: {
    fontSize: FontSizes.secondaryFS,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

export default HomePage;
