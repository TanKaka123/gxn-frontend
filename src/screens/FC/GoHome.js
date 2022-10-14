import { Text, View, StyleSheet, Image } from "react-native";
import Buttons from '../../components/Button';
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';

const GoHome = ({navigation}) => {
  return (
    <View style={style.body}>
        <View style={style.avatar}>
            <Image  style={{width:120,height:120}} 
                source={require('../../assets/images/avatar.png')}/>
        </View>
        <View style={style.content}>
            <Text style={style.text_content_1}>
                Dấu hiệu nhanh nhất để bạn biết mình đã trở thành đầu bếp chính thức
                tại <Text style={style.text_special}>CƠM NHÀ NHA </Text>: Có dấu tích xanh ở hình đại diện.
            </Text>
            <Text style={style.text_content_2}>
                Mong chị thường xuyên kiểm tra mục thông báo trên 
                app <Text style={style.text_special}>CƠM NHÀ NHA </Text> và điện thoại nhé!
            </Text>
        </View>
        <View style={style.button}>
            <Buttons content='Tiếp tục' nextPageUrl='HomeOptionFC' navigation={navigation} />         
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    body:{ 
        flex: 1 
    },
    avatar:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },  
    text_special:{
        color:Colors.secondaryColor, 
        fontWeight:'700'
    },
    content:{
        flex:1.5,
        justifyContent:'space-between',
        alignItems:'center'
    },
    text_content_1:{
        maxWidth:'85%',
        textAlign:'center',
        fontSize:FontSizes.secondaryFS
    },
    text_content_2:{
        maxWidth:'85%',
        textAlign:'center',
        fontSize:FontSizes.secondaryFS
    },
    button:{
        flex:1.5, 
        alignItems:'center',
        justifyContent:'center'
    }
});
export default GoHome;
