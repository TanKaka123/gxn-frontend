import {Text, Image,View,StyleSheet} from "react-native";
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';
import ButtonBack from '../../components/ButtonBack';
import Buttons from '../../components/Button';

const Item=({content,id})=>{
    return(
        <View style={{marginVertical:10}}>
            <Text style={{fontSize:16}}>
                <Text style={{fontWeight:'bold'}}>Bước {id+1}</Text>  {content}
            </Text>
        </View>
    )
}
const WelcomeFC=({navigation})=>{
    const listItems=['Chụp mặt trước CMND/CCCD của bạn.',
                    'Tiếp tục chụp ảnh mặt sau của giấy tờ.',
                    'Chụp ảnh gian bếp của bạn']
    return(
        <View style={{flex:1}}>
            <View style={style.viewCenter}>
               <ButtonBack navigation={navigation}/>
                <View style={{flex:2, justifyContent:'flex-end',alignItems:'center'}}>
                <Image  style={{width:150,height:100 }} source={require('../../assets/images/cmnd.png')}/>
                </View>
            </View>
            <View style={{flex:2}}>
                <View style={{flex:1.8,paddingLeft:20,paddingTop:80}}>
                  {
                    listItems.map((value,index)=>{
                        return ( <View View key={index}>
                                    <Item content={value} id={index}/>
                                </View>
                        )})
                  }
                </View>
                <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                    <Buttons content='Tiếp tục' nextPageUrl='CameraApp' navigation={navigation} /> 

                </View>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    viewCenter :{
        flex:1
    },
    textValidate:{
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
    titleItem:{
        fontSize:FontSizes.secondaryFS, 
        fontWeight:'600', color:Colors.secondaryColor, 
        borderBottomColor:Colors.secondaryColor, 
        borderBottomWidth:1,
        minWidth:170
    }
})
export default WelcomeFC;