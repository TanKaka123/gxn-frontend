import {Text, Image,View,StyleSheet} from "react-native";
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';
import Buttons from '../../components/Button';

const SignupSuccess=({navigation})=>{
    return(
        <View style={style.body}>
            <View style={style.viewCenter}>
                <Image  style={{width:120,height:135}} source={require('../../assets/images/logoCNN.png')}/>
            </View>
            <View style={style.content}>
                <Text style={style.title}>Cảm ơn chị đã quan tâm đến CƠM NHÀ NHA</Text>
                    <Text style={style.text_validate}>
                    Chúng tôi sẽ báo kết quả ứng tuyển qua thanh thông báo trên app <Text style={style.text_special}>CƠM NHÀ NHA </Text>
                    và gọi điện xác nhận với chị (nếu chị được chọn) trong 1 tuần tới. 
                    </Text>
                    <Buttons content='Tiếp tục' nextPageUrl='HomePageFC' navigation={navigation} />         
            </View> 
        </View>
    )
}
const style=StyleSheet.create({
    content :{
        flex:2,
        justifyContent:'space-around', 
        alignItems:'center'
    },
    body:{
        flex:1
    },
    viewCenter :{
        flex:1, 
        alignItems:'center', 
        justifyContent:'flex-end'
    },
    text_validate:{
        textAlign:'center',
        fontSize:19, 
        marginBottom:20,
        textAlign:'justify',
        maxWidth:'90%'
    },
    viewFlexbox:{
        flex:1, 
        flexDirection:'row',
        flexWrap: "wrap", 
        justifyContent:'center'
    },
    title:{
        color:Colors.secondaryColor,
        fontSize:FontSizes.primaryFS,
        fontWeight : '700',
        textAlign:'center',
        maxWidth:'80%'
    },
    text_special:{
        color:Colors.secondaryColor, 
        fontWeight:'700'
    }
})
export default SignupSuccess;