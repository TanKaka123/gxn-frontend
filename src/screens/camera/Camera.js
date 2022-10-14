import React , { useState , useEffect } from 'react' ;
import { StyleSheet , Text , View ,TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { Colors } from '../../assets/color/Colors';
import { FontSizes } from '../../assets/font/Font';
import TakePhoto from '../../assets/icons/TakePhoto';

export default function CameraApp({navigation}) {
  const [ hasCameraPermission ,setHasCameraPermission] =useState(null);
  const [camera,setCamera] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Camera.Constants.Type.back);
  
  useEffect(()=>{
   ( async ()=>{
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[]);

  const takePicture=async() => {
    if ( camera ) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri) ;
    }
}
  if ( hasCameraPermission === false ) {
    return <Text> No Camera Access </Text >
  }

  useEffect(()=>{
    if(image)
    {
        navigation.navigate('ValidateImage', {
            paramKey: image
          })
    } 
  })
 return (
   <View style = {{flex:1} } >
      <View style={{height:'30%', alignItems:'center', justifyContent:'space-around',paddingTop:20}}>
          <Text style={[style.title,{
          fontWeight:'500',fontSize:FontSizes.primaryFS}]} >
              Chụp CMND/CCCD mặt trước
          </Text>
          <Text  style={style.title}>Chắc chắn rằng hình ảnh CMND/CCCD của bạn không bị nhòe, lóa sáng và nằm trọn trong khung hình</Text>
      </View>
      <View style={style.cameraContainer}>
        <View style={style.borerDisplay}>
        <Camera ref={ref=>setCamera(ref)}
          style={style.fixedRatio}
          type={type}
          ratio={'1:1'}/>
        </View>
          
      </View>
      <View style={style.center}>
        <TouchableOpacity  
            onPress={()=>{
                takePicture();
                  }}>
            <TakePhoto width={80} height={80} fill={Colors.secondaryColor}/>
        </TouchableOpacity>
      </View>
    </ View >
 )}

 const style=StyleSheet.create({
  borerDisplay:{  
    borderColor:Colors.secondaryColor,
    borderWidth:2,
    borderRadius:5
  },
    center:{
      flex:1, 
      alignItems:'center',
      justifyContent:'center'
    },
    cameraContainer : {
        height:'55%',
        padding:10
    },
    fixedRatio:{
        height:'100%',
        width:'100%',
    },
    title:{
        fontSize:FontSizes.secondaryFS,
        textAlign:'center',
        fontWeight:'400'
    }
})