import ArrowNextS from "../../assets/icons/ArrowNextSmall";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import { DataAddr } from "../../components/DataAddress";
import { useState } from "react";
import LogoS from "../../components/LogoSmall";
import ButtonComponent from "../../components/Button";
import { useEffect } from "react";
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
      <Text style={style.textDropdown}>
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

const DropdownDistrict = ({
  showOption,
  setShowOption,
  onChangeTextSearch,
  textSearch,
  DataAddr,
  setValueDropdown,
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
                placeholder="Nhập tên Quận/Huyện, Phường/Xã"
                placeholderTextColor={Colors.secondaryColor}
              />
              <Pressable onPress={() => setShowOption(false)}>
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
                      onChangeTextSearch("");
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

const GoAddress = ({ navigation }) => {
  const [showOption, setShowOption] = useState(false);
  const [valueDropdown, setValueDropdown] = useState(null);
  const [showOptionDistrict, setShowOptionDistrict] = useState(false);
  const [valueDistric, setValueDistric] = useState(null);
  const [districts, setDistrict] = useState([]);
  const [text, onChangeText] = useState("");
  const [textSearch, onChangeTextSearch] = useState("");
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 3,
      }}
    >
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
      <DropdownDistrict
        showOption={showOptionDistrict}
        setShowOption={setShowOptionDistrict}
        onChangeTextSearch={onChangeTextSearch}
        textSearch={textSearch}
        DataAddr={districts}
        setValueDropdown={setValueDistric}
      />

      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <LogoS />
      </View>
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1.6,
            justifyContent: "space-around",
            paddingVertical: 50,
          }}
        >
          <SafeAreaView>
            <TextInput
              style={{
                borderWidth: 2,
                padding: 10,
                borderColor: Colors.secondaryColor,
                minWidth: 280,
                borderRadius: 5,
                fontWeight: "500",
                minWidth:'90%',
                opacity:0.8
              }}
              onChangeText={onChangeText}
              value={text}
              placeholder="Tên đường, tòa nhà, số nhà"
              placeholderTextColor={Colors.secondaryColor}
            />
          </SafeAreaView>
          <DropdownElement
            showOption={showOption}
            setShowOption={setShowOption}
            valueDropdown={valueDropdown}
            content="Tỉnh/Thành phố"
          />

          <DropdownElement
            showOption={showOptionDistrict}
            setShowOption={setShowOptionDistrict}
            valueDropdown={valueDistric}
            content="Quận/Huyện, Phường/Xã"
          />
        </View>
        {!isKeyboardVisible && (
          <View
            style={{
              flex: 1.7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate("FillInfor")}
            >
              <Text style={style.text}>Nộp đơn ứng tuyển</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
export default GoAddress;
