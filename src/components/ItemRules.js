import { View, FlatList, Text, StyleSheet } from "react-native";
import { Colors } from "../assets/color/Colors";
import { FontSizes } from "../assets/font/Font";

const renderItem = ({ item }) => {
  return (
    <View style={style.flexbox}>
      <Text style={style.titleItem}>{item.title}</Text>
      <Text style={style.contentItem}>{item.content}</Text>
    </View>
  );
};
const ItemRule = ({ titleListItems, items }) => {
  return (
    <View style={{ flex: 1.8, alignItems: "center" }}>
      <Text style={style.titleListItem}>
        <Text style={style.line}>___</Text>
        {titleListItems}
        <Text style={style.line}>___</Text>
      </Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        style={{ marginBottom: 0 }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  titleItem: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: Colors.secondaryColor,
    // borderBottomColor:Colors.secondaryColor,
    // borderBottomWidth:1,minWidth:170
    marginTop: 5,
  },
  contentItem: {
    textAlign: "center",
    fontSize: 14,
    paddingLeft: 35,
    paddingRight: 35,
  },
  flexbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleListItem: {
    color: Colors.secondaryColor,
    fontSize: FontSizes.secondaryFS,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
  },
  line: {
    fontWeight: "300",
  },
});
export default ItemRule;
