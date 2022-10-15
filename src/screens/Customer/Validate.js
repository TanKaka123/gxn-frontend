import {  Pressable,  Image, ScrollView} from "react-native";




  const Validate=({navigation})=>{
    return (
        <ScrollView>
           
            {/* <View style={{marginTop:20}}>
                <ButtonBack navigation={navigation} />
            </View> */}
            <Pressable style={{flex:1, justifyContent:'center', alignItems:'center',marginVertical:20}} 
            onPress={() => navigation.navigate("Map")}>
            <Image
        style={{ width: '90%', flex: 1 }}
        source={require("../../assets/images/group.png")}
        />
            </Pressable>
            
        </ScrollView>
    )
  }


export default Validate ;