import {Text, Image, View, StyleSheet, TouchableOpacity  } from "react-native";
import {FontSizes} from '../../assets/font/Font';
import { Colors } from "../../assets/color/Colors";
import DotSlider from '../../components/dotSlider';
import ArrowNext from '../../assets/icons/ArrowNext';
import Line from '../../components/Line';

const WelcomePage2=({ navigation })=>{
  return(
    <View style={style.body}>
        <View style={style.title}>
            <Text style={style.text_title}>
                Về nhà với mẹ, ăn CƠM NHÀ NHA!
            </Text>
        </View>
       
        <View style={style.image}>
            <View style={style.background_image} />
            <Image
            style={{ width: 270, height: 300 }}
            source={require("../../assets/images/mom.png")}
            />
        </View>

        <View style={style.footer}>
           <Line/>
           <View style={style.inner_footer}>
                  <TouchableOpacity  
                    style={style.button}
                    onPress={() => navigation.navigate('LogIn')}>
                        <Text style={style.text_skip} >Skip</Text>
                    </TouchableOpacity>
                    <View style={style.dot}>
                        <DotSlider  listPage={['WelcomePage1','WelcomePage2']} currNumberPage={2} navigation={navigation}/>
                    </View>
                    <TouchableOpacity style={style.button_next}
                        onPress={() => navigation.navigate('LogIn')} >
                        <ArrowNext width={24} height={24} fill={Colors.secondaryColor}/>
                    </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
      },
      title: {
        height: "30%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingBottom: 32,
        paddingLeft: 20,
      },
      image: { 
        height: "55%", 
        alignItems: "center" 
      },
      background_image: {
        backgroundColor: "#CCA312",
        borderRadius: 200,
        height: 200,
        position: "absolute",
        width: 200,
      },
      button: { 
        flex: 1, 
        alignItems: "center" 
      },
      footer: { 
        flex: 1 
      },
      headerSpeak: {
        alignItems: "flex-end",
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20,
        width: "90%",
      },
      text_skip: {
        color: Colors.secondaryColor,
        fontSize: FontSizes.primaryFS,
        fontWeight: "bold",
        marginTop: -5,
      },
      text_title: {
        color: Colors.secondaryColor,
        width: "70%",
        fontSize: FontSizes.secondaryFS,
        fontWeight: "600",
        borderBottomColor: Colors.secondaryColor,
        borderBottomWidth: 1,
        paddingBottom: 10,
      },
      inner_footer: { 
        flex: 1, 
        flexDirection: "row" 
      },
      dot: { 
        flex: 2 
      },
      button_next: { 
        flex: 1, 
        alignItems: "center" 
      }
})
export default WelcomePage2;