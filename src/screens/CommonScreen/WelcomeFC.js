import { Text, Image, View, StyleSheet } from "react-native";
import { Colors } from "../../assets/color/Colors";
import Buttons from '../../components/Button';
import Line from "../../components/Line";
import DotSlider from '../../components/dotSlider';

const WelcomeFC=({ navigation })=>{
    return(
        <View style={style.body}>
            <View style={ style.image }>
                <Image style={{ width:120,height:135 }} 
                    source={ require('../../assets/images/logoCNN.png') }/>
            </View>
            <View style={style.content}>
                <View style={style.text_content}>
                    <Text style={style.text_validate}>
                        Xin chào những người phụ nữ xinh đẹp. Hãy cùng <Text style={style.text_special}>CƠM NHÀ NHA </Text>
                        tô điểm cuộc đời bằng tài năng nấu nướng điêu luyện của chị nhé!
                    </Text>
                    <Buttons content='tiếp tục' nextPageUrl='HomeOptionFC' navigation={navigation} />
                </View>
                <View style={{ flex:0.5 }}>
                    <Line/>
                    <DotSlider listPage={['WelcomeFC','HomeOptionFC','HomeOptionFC']} currNumberPage={1} navigation={navigation}/>
                </View>
            </View> 
        </View>
    )
}
const style=StyleSheet.create({
    text_special:{color:Colors.secondaryColor, fontWeight:'700'},
    text_content:{ flex:1.8,justifyContent:'space-around', alignItems:'center' },
    content:{ flex:2 },
    body:{ flex:1 },
    image :{
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
    }
})
export default WelcomeFC;