import { Pressable, Image, ScrollView, Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../../assets/color/Colors";
import ArrowBack from "../../assets/icons/ArrowBack";
import { useEffect } from "react";
import { FontSizes } from "../../assets/font/Font";
import ArrowNextS from "../../assets/icons/ArrowNextSmall";
import { LogBox } from "react-native";

const Profile = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Đơn hàng",
      contain: [
        {
          content: "Gửi món mới cho Cơm Nhà Nha",
          url: "",
        },
        {
          content: "Thực đơn gần đây",
          url: "RecentMenu",
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cá nhân",
      contain: [
        {
          content: "Chỉnh sửa tài khoản",
          url: "",
        },
        {
          content: "Địa chỉ giao hàng",
          url: "",
        },
        {
          content: "Phương thức thanh toán",
          url: "",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Dịch vụ",
      contain: [
        {
          content: "Đóng góp ý / phản ảnh về CNN",
          url: "",
        },
        {
          content: "Hỗ trợ",
          url: "",
        },
        {
          content: "Điều khoản và chính sách",
          url: "",
        },
      ],
    },
  ];

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={style.wrapper_item} key={item.id}>
        <Text style={style.title_item}>{item.title}</Text>
        {item.contain.map((value, index) => {
          return (
            <Pressable style={style.item}  key={index} onPress={() => navigation.navigate(value.url)}  >
              <Text style={style.item_content}>{value.content}</Text>
              <View style={style.item_icon}>
                <ArrowNextS width={15} height={20} fill="#7D7A7A" />
              </View>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={style.wrapper_heading}>
        <Pressable style={style.outer_button}>
          <ArrowBack width={40} height={30} color="white" />
        </Pressable>
        <Text style={style.heading}>Thông tin tài khoản</Text>
      </View>
      <View style={style.container}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../../assets/images/avatar.png")}
        />
        <Text style={style.text_name}>Lan Anh</Text>
        <Text style={style.text_role}>Freelance cook</Text>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <FlatList
            style={style.container_list}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper_heading: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    backgroundColor: Colors.secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
  },
  outer_button: { 
    position: "absolute", 
    left: 20, 
    bottom: "35%" 
  },

  heading: { 
    fontWeight: "700", 
    fontSize: 17, 
    color: "white" 
  },

  container: { 
    flex: 1, 
    marginTop: 50, 
    alignItems: "center" 
  },

  text_name: {
    color: Colors.secondaryColor,
    fontWeight: "800",
    fontSize: FontSizes.primaryFS,
    marginVertical: 10,
  },

  text_role: {
    color: "#7D7A7A",
    fontSize: FontSizes.font3th,
    marginBottom: 30,
  },

  container_list: { 
    width: "100%", 
    paddingHorizontal: 20 
  },

  wrapper_item: {
    width: "100%",
    alignItems: "flex-start",
    borderBottomColor: "F7F7F7",
    borderBottomWidth: 0.2,
  },

  title_item: {
    color: Colors.secondaryColor,
    fontSize: FontSizes.secondaryFS,
    fontWeight: "700",
    marginVertical: 10,
  },

  item: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  item_content: { 
    fontSize: FontSizes.font3th 
  },

  item_icon: { 
    transform: [{ rotate: "180deg" }], 
    opacity: 0.5 
  },
});

export default Profile;
