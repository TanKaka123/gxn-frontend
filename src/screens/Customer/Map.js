import {  Pressable,  Image, ScrollView} from "react-native";




  const Map=({navigation})=>{
    return (
        <ScrollView>
           
            {/* <View style={{marginTop:20}}>
                <ButtonBack navigation={navigation} />
            </View> */}
            <Pressable style={{flex:1, justifyContent:'center', alignItems:'center',marginVertical:20}}>
            <Image
        style={{ width: '100%', height:600 }}
        source={require("../../assets/images/map.png")}
        />
            </Pressable>
            
        </ScrollView>
    )
  }


export default Map ;