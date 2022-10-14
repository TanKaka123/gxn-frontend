import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView, Pressable } from "react-native";
import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import Search from "../../assets/icons/Search";
import ArrowNextS from "../../assets/icons/ArrowNextSmall";
import { DataAddr } from "../../components/DataAddress";
import { useState } from "react";
import Close from "../../assets/icons/Close";
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
                placeholder="Nhập tên Tỉnh/Thành phố"
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
  const [showOption, setShowOption] = useState(false);
  const [valueDropdown, setValueDropdown] = useState(null);
  const [valueDistric, setValueDistric] = useState(null);
  const [districts, setDistrict] = useState([]);
  const [textSearch, onChangeTextSearch] = useState("");
  return (
    <ScrollView >
      <View style={style.wrapper_heading}>
        <Text style={style.headding_title}>
            NHỚ ĂN UỐNG ĐẦY ĐỦ NHA CON 
        </Text>
      </View>
      <Text style={[style.title, { marginTop: 55, fontWeight: "700" }]}>
        Chọn thực đơn
      </Text>
     <InputComponent/>
     <DropdownProvince
        showOption={showOption}
        setShowOption={setShowOption}
        onChangeTextSearch={onChangeTextSearch}
        textSearch={textSearch}
        DataAddr={DataAddr}
        setValueDropdown={setValueDropdown}
        setDistrict={setDistrict}
        setValueDistric={setValueDistric}
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
            showOption={showOption}
            setShowOption={setShowOption}
            valueDropdown={valueDropdown}
            content="Điểm xuất phát"
          />
     
      </View>
      <View style={{flex:1}}></View>
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
