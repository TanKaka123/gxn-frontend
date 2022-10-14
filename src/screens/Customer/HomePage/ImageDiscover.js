import { Pressable, Image, Text, View, StyleSheet, ImageBackground,ScrollView} from "react-native";
import { FontSizes } from "../../../assets/font/Font";
import { LinearGradient } from "expo-linear-gradient";
import ArrowNext from "../../../assets/icons/ArrowNext";
import { useState } from "react";

const ButtonBox = () => {
  
  const List_desc=[
                    {
                        tile:'ĐẦU BẾP CHẤT LƯỢNG',
                        content:'Để trở thành đầu bếp tự do tại Cơm nhà nha, những người phụ nữ nội trợ đã phải trải qua 2 vòng tuyển chọn vô cùng khó khăn: vòng hồ sơ, và vòng đào tạo. Nếu vượt qua khóa        đào tạo, những người phụ nữ nội trợ sẽ được nhận giấy chứng nhận chính thức trở thành đầu bếp tại CƠM NHÀ NHA!',
                        urlImage :require('../../../assets/images/Discover_1.png')
                    },
                    {
                        tile:'TỰ THIẾT KẾ GIÁ CẢ VÀ MÓN ĂN',
                        content:'Đến với CƠM NHÀ NHA, bạn có thể tự do thiết kế bữa ăn và giá cả bữa ăn mà bạn muốn. Sau đó, thực đơn của bạn sẽ được đăng lên CƠM NHÀ NHA và gửi đến cho những người đầu bếp tự do gần bạn. Nếu chỉ có 1 đầu bếp nhận đơn của bạn, bạn có quyền đồng ý hoặc từ chối đầu bếp đó nếu cảm thấy không phù hợp. Nếu có từ 2 đầu bếp trở lên đồng ý nấu đơn của bạn, bạn có quyền chọn đầu bếp phù hợp nhất để nấu cho bạn.',
                        urlImage :require('../../../assets/images/Discover_2.png')
                    },
                    {
                        tile:'KHÔNG GIAN BẾP CHẤT LƯỢNG VÀ ĐƯỢC KIỂM TRA THƯỜNG XUYÊN',
                        content:'Những người đấu bếp tự do tại CƠM NHÀ NHA bắt buộc phải chụp không gian bếp của họ ở vòng hồ sơ. Không gian bếp của đầu bếp sạch sẽ là một trong những tiêu chí quan trọng để CƠM NHÀ NHA có chọn người nộp đơn đó trở thành đầu bếp chính thức tại CƠM NHÀ NHA hay không. Đồng thời, CƠM NHÀ NHA cũng có đội ngũ kiểm tra chất lượng đầu bếp, tức đội ngũ này sẽ thường xuyên đến thăm trực tiếp các gian bếp của đầu bếp tự do của CƠM NHÀ NHA nhằm xác minh và đánh giá chất lượng không gian bếp của người đầu bếp đó. CƠM NHÀ NHA có quyền dừng hợp đồng với đầu bếp không trung thực, bị khiếu nại từ khách hàng, không tuân thủ khâu vệ sinh thực phẩm trong quá trình nấu ăn cho khách hàng.',
                        urlImage :require('../../../assets/images/Discover_3.png')
                    },
            ]

  return (
    <View style={{ marginTop: 30, marginBottom:45,alignItems: "center", paddingRight:15}}>
        <ScrollView horizontal={true} >
            {
                List_desc && List_desc.map((value, index)=>{
                   
                    
                    return (
                       <ImageBackground key={index}
                        style={{ width: 250, height: 300,  borderRadius:100, marginLeft:15   }}
                        imageStyle={{ borderRadius: 5}}
                        source={value.urlImage}
                    > 
                        <View style={style.container_desc}  >
                            <Text style={style.title}>{value.tile}</Text>
                        <Text style={style.content}>{value.content.slice(0,80)}........</Text>
                        <Text style={style.text_see_more}>Xem chi tiết </Text>
                        </View>
                    </ImageBackground>
                    )
                })
            }
         
        </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container_desc:{
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-around",
    alignItems: 'flex-start',
    backgroundColor:'rgba(0,0,0,0.5)',
    height:'60%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 15
  },
  title:{ 
    color:'white',
     fontWeight:'800',
      fontSize:FontSizes.secondaryFS
  },
  content:{ 
    color:'white',
     fontSize:FontSizes.font3th
  },
  text_see_more:{ 
    color:'white',
    fontSize:FontSizes.font3th,
    fontWeight:'700',
  }
});

export default ButtonBox;
