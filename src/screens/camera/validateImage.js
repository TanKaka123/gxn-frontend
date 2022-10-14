import {Image,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';



const ButtonValidate=({content, backgroundColor, textColor,nextScreen,navigation})=>{
    return(
            <TouchableOpacity style={[style.buttonValidate,{backgroundColor:backgroundColor}]} onPress={() => navigation.navigate(nextScreen)}>
                <Text style={{color:textColor, fontSize:FontSizes.secondaryFS, fontWeight:'400'}}>{content}</Text>
            </TouchableOpacity>
    )
}
const ValidateImage=({navigation,route})=>{
   
    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
            callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }
      
      toDataURL(route.params.paramKey, function(dataUrl) {
        console.log('RESULT:')
      })

    return(
        <View style={{flex:1}}>
            <View style={style.wrapperTitle}>
                    <Text style={style.title}>
                        CMND/CCD của bạn có hiển thị đầy đủ, không bị nhòe, lóa sáng và không bị mờ không ?
                    </Text>
            </View>
            <View style={{flex:3,justifyContent:'space-around'}}>
                <View style={{justifyContent:'space-around',alignItems:'center',padding:10}}>
                    <Image style={{width:'100%',height:300,borderColor:Colors.secondaryColor,borderWidth:2,borderRadius:5}} source={{uri:route.params.paramKey}} />
                </View>
                <View style={style.containerButton}>
                    <ButtonValidate content="Chụp lại" backgroundColor={Colors.Color3th} textColor={Colors.secondaryColor} nextScreen='CameraApp' navigation={navigation}/>
                    <ButtonValidate content="Xác nhận" backgroundColor={Colors.secondaryColor} textColor="white" nextScreen='GoAdress' navigation={navigation}/>
                </View>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    buttonValidate:
    { 
        maxWidth:120,
        paddingHorizontal:10,
        paddingVertical:10, 
        borderColor:Colors.secondaryColor,
        borderRadius:5,
        borderWidth:2,
    },
    title:{
        fontSize:FontSizes.secondaryFS,
        textAlign:'center',
        fontWeight:'400'
    },
    containerButton:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    wrapperTitle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    }
})
export default ValidateImage;