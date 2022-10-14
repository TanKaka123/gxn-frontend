import {  Pressable,  Image, ScrollView,  Text, View,TextInput,StyleSheet,  TouchableOpacity} from "react-native";
  import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import ButtonBack from "../../components/ButtonBack";
import Calendar from "../../assets/icons/Calendar";
import {ListMenu} from '../../assets/json/ListMenu';
import { useState } from "react";


  const RecentMenu=({navigation})=>{
    return (
        <ScrollView>
            <View style={style.wrapper_heading} >
                <Text style={{ fontWeight: "700", fontSize: 17, color: "white" }}>
                    Thông tin tài khoản
                </Text>
            </View>
            <View style={{marginTop:20}}>
                <ButtonBack navigation={navigation} />
            </View>
            <Text style={[style.title,{fontWeight:'700', marginTop:10}]}>THỰC ĐƠN GẦN ĐÂY</Text>
            <View style={{paddingHorizontal:40, paddingBottom:20}}>
                {
                        ListMenu && ListMenu.map((value, index)=>{
                            return(
                                <View key={index}>
                                    <Text style={{fontWeight:'600', fontSize:FontSizes.secondaryFS, marginBottom:5, marginTop:25}}>{value.time}</Text>
                                    <View style={{borderColor:Colors.secondaryColor,borderRadius:5, borderWidth:2, paddingVertical:15, paddingHorizontal:10}} key={index}>
                                        <Text style={{fontWeight:'700', fontSize:FontSizes.font3th}}>{value.first_dish}</Text>
                                        <Text >Nguyên liệu chính : {value.first_element}</Text>
                                        <Text style={{fontWeight:'700', fontSize:FontSizes.font3th, marginTop:5}}>{value.second_dish}</Text>
                                        <Text>Nguyên liệu chính : {value.second_element}</Text>
                                        <Text style={{marginTop:8}}>Giá menu : <Text style={{color: Colors.secondaryColor,fontWeight:'600',fontSize:FontSizes.font3th}}>{value.price}</Text> </Text>
                                    </View>
                                </View>
                            )
                        })
                }
            </View>
        </ScrollView>
    )
  }


  const style = StyleSheet.create({
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
    })
export default RecentMenu ;