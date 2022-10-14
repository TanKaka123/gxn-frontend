import { Text, View, StyleSheet, SafeAreaView, TextInput, Pressable, Keyboard} from "react-native";
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';
import { useState ,useEffect} from 'react';
import { CheckboxCircleUnlock, CheckboxCircleLock, CheckboxSquareUnlock, CheckboxSquareLock } from "../../components/Checkbox";
import LogoS from "../../components/LogoSmall";
import ButtonComponent from "../../components/Button";


const CheckBoxSquare=({check,setCheck})=>{
    return(
        <>
            { check?<CheckboxSquareLock color={Colors.secondaryColor}/> :<CheckboxSquareUnlock color={Colors.secondaryColor}/>}
        </>
    )
}

const CheckBoxCircle=({check,setCheck})=>{
    return(
        <> 
            {check?<CheckboxCircleLock color={Colors.secondaryColor}/> :<CheckboxCircleUnlock color={Colors.secondaryColor}/>}
        </>
    )
}
const FillInfor = ({navigation}) => {
    const [text, onChangeText] = useState("");
    const [text2, onChangeText2] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check3, setCheck3] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardVisible(true); // or some other action
        }
        );
        const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
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
    <View style={style.body}>
        <View style={[style.image, isKeyboardVisible && {height:'67%',justifyContent:'center'}]}>
            <LogoS/>
        </View>
        <View style={[style.content, isKeyboardVisible &&{paddingBottom:15}]}>
            <View style={style.wrapper_content}>
                <Text style={style.title}>Họ và tên</Text>
                <SafeAreaView>
                    <TextInput
                        style={style.inputbar}
                        onChangeText={onChangeText}
                        value={text}
                        placeholderTextColor={Colors.secondaryColor}
                    />
                </SafeAreaView>
                <Text style={style.title}>Số điện thoại</Text>
                <SafeAreaView>
                    <TextInput
                        style={style.inputbar}
                        onChangeText={onChangeText2}
                        value={text2}
                        placeholderTextColor={Colors.secondaryColor}
                    />
                </SafeAreaView>
                {!isKeyboardVisible &&  <Text style={style.title}>Thu nhập mỗi tháng đến từ</Text>}
                
               {!isKeyboardVisible && <View style={style.multichoice}>
                    <Pressable style={style.checkbox_option} onPress={()=>{setCheck1(!check1)}}>
                        <CheckBoxCircle check={check1} setCheck={setCheck1}/>
                        <Text style={style.textChoice}>Không có thu nhập</Text>
                    </Pressable>
                    <Pressable style={style.checkbox_option} onPress={()=>{setCheck2(!check2)}}> 
                        <CheckBoxCircle check={check2} setCheck={setCheck2}/>
                        <Text style={style.textChoice}>Làm tự do</Text>
                    </Pressable>
                    <Pressable style={style.checkbox_option} onPress={()=>{setCheck3(!check3)}}>
                        <CheckBoxCircle check={check3} setCheck={setCheck3}/>
                        <Text style={style.textChoice}>Từ chồng/con</Text>
                    </Pressable>
                </View> }
                {!isKeyboardVisible &&  <Pressable style={style.button_rule} onPress={()=>{setCheck4(!check4)}}>
                        <CheckBoxSquare check={check4} setCheck={setCheck4}/>
                        <Text style={style.textRule}>Tôi đồng ý với <Text style={{color:Colors.secondaryColor}}>điều khoản dịch vụ</Text>  </Text>
                </Pressable>      }
            </View>
            {!isKeyboardVisible &&   <View style={style.button}>
                <ButtonComponent content='Tiếp tục' nextPageUrl='SignupSuccess' navigation={navigation}/> 
            </View>}
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    multichoice:{
        flexWrap:'wrap', 
        flexDirection:'row',
        alignItems:'center'
    },
    wrapper_content:{
        flex:1.8,
        justifyContent:'flex-end',
        width:'90%'
    },
    content:{
        flex:1
    },
    body:{ 
        flex:1, 
        alignItems:'center',
        justifyContent:'center', 
        paddingHorizontal:3,
        backgroundColor:'white'
    },
    title:{
        fontSize:FontSizes.secondaryFS,
        fontWeight:'700'
    },
    textChoice:{
        fontSize:FontSizes.font3th,
        paddingLeft:10
    },
    checkbox_option:{
        flexDirection:'row', 
        marginRight:30,
        marginTop:15
    },
    textRule:{
        fontSize:FontSizes.font3th,
        paddingLeft:10,
        fontWeight:'600'
    },
    image:{
        height:'33%',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    inputbar:{
        borderWidth:2,
        padding:5,
        borderColor:Colors.secondaryColor,
        minWidth:280,
        borderRadius:5,
        fontWeight:'500',
        minWidth:'100%'
    }
    ,
    button:{
        flex:0.8,
        justifyContent:'center',
        alignItems:'center'
    },
    button_rule:{
        flexDirection:'row',
        marginTop:20
    }
});
export default FillInfor;
