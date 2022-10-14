import {
  Pressable,
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import { Colors } from "../../assets/color/Colors";
import { FontSizes } from "../../assets/font/Font";
import ButtonBack from "../../components/ButtonBack";
import Calendar from "../../assets/icons/Calendar";
import {FavoriteFood} from '../../assets/json/FavoriteFood';
import {DishFirst} from '../../assets/json/DishFirst';
import {DishSecond} from '../../assets/json/DishSecond';
import { useState } from "react";
import ArrowNextS from "../../assets/icons/ArrowNextSmall";
import Meal from "../../assets/icons/Meal";
import Add from "../../assets/icons/Add";
import Dropdown from "../../assets/icons/Dropdown";
import Close from "../../assets/icons/Close";

const DropdownCalendar=()=>{
    const currDay = new Date().getDate();
    const currMonth = new Date().getMonth()+1;
    const currYear = new Date().getFullYear();

    const [openModalCalendar, setOpenModalCalendar] = useState(false);
    const [monthDisplay, setMonthDisplay] = useState(currMonth)
    const [yearDisplay, setYearhDisplay] = useState(currYear)
    const [dayInMonth, setDayInMonth] = useState([]);
    
    const [stateDay, setStateDay] = useState(null);
    const [stateMonth, setStateMonth] = useState(null);
    const [stateYear, setStateYear] = useState(null);

    const DAY =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    
    const getDayInMonth=(year,month)=>{
      setDayInMonth(DAY.slice(0,new Date(year, month, 0).getDate()))
    }
    return (
        <View style={{marginRight:20, zIndex:10, width:160}}>
            <Pressable style={[style.button_calendar,{borderColor:Colors.secondaryColor,borderWidth:2, justifyContent:'space-around', borderRadius:5, padding:5}]} 
              onPress={()=>{  setOpenModalCalendar(!openModalCalendar);
                              getDayInMonth(currYear,currMonth);
            }}>
                <Calendar height={24} width={24} color={Colors.secondaryColor}/>
                <Text style={{color:Colors.secondaryColor, fontSize:FontSizes.font3th}}>{stateDay ? stateDay+'/'+stateMonth+'/'+stateYear:'Ngày/tháng/năm'}</Text>
            </Pressable>
            <View>
            {
                openModalCalendar && <View style={style.contain_modal_calendar}>
                  <View style={style.inner_modal_calendar}>
                    <Pressable onPress={()=>{currMonth==1 ? setMonthDisplay(12) && setYearhDisplay(currYear-1) : setMonthDisplay(monthDisplay-1) ;
                      getDayInMonth(yearDisplay,monthDisplay);
                    }}>
                      <ArrowNextS width={15} height={18} fill={Colors.secondaryColor} />
                    </Pressable>

                    <Text>{currDay}/{currMonth}/{currYear}</Text>
                    <Pressable style={style.button_next_calendar} onPress={()=>{currMonth==12 ? setMonthDisplay(1) && setYearhDisplay(currYear+1) : setMonthDisplay(currMonth+1) ;  
                          getDayInMonth(yearDisplay,monthDisplay);}} >
                        <ArrowNextS width={15} height={17} fill={Colors.secondaryColor} />  
                    </Pressable>
                  </View>
                  <Text style={{marginVertical:5}}>Tháng {monthDisplay}/{yearDisplay}</Text>
                  <View style={style.list_day}>
                   {
                    dayInMonth && dayInMonth.map((value, index)=>{
                      return(
                          <Pressable style={{width:26, height:26}} key={index} onPress={()=>{setStateDay(value); setStateMonth(monthDisplay); setStateYear(yearDisplay);setOpenModalCalendar(!openModalCalendar)}} >
                            <Text> {value}</Text>
                           
                          </Pressable>
                      )
                    }) 
                   }
                       
                  </View>
                </View>
            }</View>
        </View>
    )
}

const DropdownMeal=()=>{
  const [openModalDish, setOpenModalDish] = useState(false);
  return(
    <View style={{flexDirection:'row', alignItems:'center',marginLeft:10, width:130, borderColor:Colors.secondaryColor,borderWidth:2, justifyContent:'space-around', borderRadius:5, padding:5}}>
        <Meal height={24} width={24} color={Colors.secondaryColor}/>
        <Text style={{color:Colors.secondaryColor, fontSize:FontSizes.font3th}}>Bữa ăn</Text>
        <View>
        {
          openModalDish && <View style={{position: 'absolute', top:'100%',}}>
              <Pressable>
                <Text>Bữa trưa</Text>
              </Pressable>
              <Pressable>
                <Text>Bữa chiều</Text>
              </Pressable>
          </View>
        }
        </View>
    </View>
  )
}

const ModalDish=({open, setOpen, setDish,Dish})=>{
  const [text, onChangeText] = useState('');
  return(
    <View style={{position:'absolute', backgroundColor:'white',width:'100%',height:'100%', zIndex:10, padding:25, borderRadius:20, marginTop:5}}>
   
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:30}}>
   <TextInput placeholder="Nhập tên món                       " 
   style={{color:Colors.secondaryColor, fontSize: FontSizes.secondaryFS, borderBottomColor: Colors.secondaryColor, borderBottomWidth:1, maxWidth:'70%'}}
   onChangeText={changeText => onChangeText(changeText)}/> 
   <Pressable onPress={()=>{setOpen(!open)}}>
    <Close height={24} width={24} color={Colors.secondaryColor}/>
   </Pressable>
     
   </View>
     
      {
        Dish && Dish.filter((value)=>{
          return (text==='' ||  ( String(value.name).toLowerCase().includes(text.toLowerCase())) )? value: null
        }).map((value, index)=>{
          return(
            <Pressable key={index} style={{marginVertical:10,borderBottomColor:'F5F5F5', borderBottomWidth:0.5}} onPress={()=>{setOpen(!open); setDish(value)}}>
              <Text style={{fontSize: FontSizes.secondaryFS, fontWeight:'600'}}>{value.name}</Text>
              <Text style={{marginVertical:5}}>Nguyên liệu chính : {text} {value.element}</Text>
            </Pressable>
          )
        })
      }
    </View>
  )
}
const PickMenu = ({ navigation }) => {
  const [openFirstDish,setOpenFirstDish] = useState(false);
  const [openSecondDish,setOpenSecondDish] = useState(false);
  const [firstDish,setFirstDish] = useState(null);
  const [secondDish,setSecondDish] = useState(null)
  return (
    <ScrollView style={style.body}>
      {openFirstDish && <ModalDish open={openFirstDish} setOpen={setOpenFirstDish} setDish={setFirstDish} Dish={DishFirst}/>}
      {openSecondDish && <ModalDish open={openSecondDish} setOpen={setOpenSecondDish} setDish={setSecondDish} Dish={DishSecond}/>}
      <View style={style.wrapper_heading}>
        <Text style={{ fontWeight: "700", fontSize: 17, color: "white" }}>
          Nhớ ăn uống đầy đủ nha con
        </Text>
      </View>

      <View style={{marginTop:20}}>
         <ButtonBack navigation={navigation} />
      </View>

      <Text style={[style.title,{marginTop: 10, fontWeight: "700",}]} >
        Chị muốn lên{'\n'} thực đơn cho ngày nào?
      </Text>

      <Text style={style.desc}>Lưu ý: món mặc định luôn có cơm.</Text>

      <View style={{flexDirection:'row' ,justifyContent:'center', alignItems:'center'}}>
        <DropdownCalendar/>
        <DropdownMeal/>
      </View>

      <Pressable style={[style.input,{ marginTop:40, marginBottom:10, flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingHorizontal:20}]} onPress={()=>{setOpenFirstDish(!openFirstDish)}}>
        <Text  style={{paddingVertical:5, color:Colors.secondaryColor}}>
          {firstDish ?firstDish.name:'Tên món mặn' }
        </Text>
        <Dropdown width={17} height={14} color={Colors.secondaryColor} />
      </Pressable>
      <Pressable style={[style.input,{marginVertical:10, flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingHorizontal:20}]} onPress={()=>{setOpenSecondDish(!openSecondDish)}}>
        <Text  style={{ paddingVertical:5, color:Colors.secondaryColor}}>
           
            {secondDish ?secondDish.name:' Tên món canh' }
        </Text>
        <Dropdown width={17} height={14} color={Colors.secondaryColor} />
      </Pressable> 

      <Pressable style={{alignItems:'center'}}>
        <Add height={43} width={43} color={Colors.secondaryColor}/>
      </Pressable>

     <TouchableOpacity style={style.button_up_menu}>
      <Text style={style.text_up_menu}>Đăng thực đơn</Text>
     </TouchableOpacity>
     <View style={{paddingHorizontal:'5%',marginVertical:100}} >
        <Text style={[style.title,{fontWeight: "700",  textAlign: "left",}]}>Món được đặt nhiều nhất</Text>
        <View style={{flexDirection:'row', marginTop:20}}>
        <ScrollView horizontal={true} >
        {
          FavoriteFood && FavoriteFood.map((value, index)=>{
              return(
                <View style={{marginRight:15}} key={index}>                 
                  <Image style={{ width: 120, height: 120 , borderRadius:5}}  source={{uri:value.image}} />
                  <Text style={{fontSize:FontSizes.font3th}}>{value.name.slice(0,13)}{value.name.length>13 && '...'}</Text>
                </View>
              )
            })
        }
          </ScrollView>
        </View>
     </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body:{ 
    flex: 1 
  },
  wrapper_heading: {
    width: "100%",
    height: 120,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title:{ 
    color: Colors.secondaryColor,
    textAlign: "center",  
    fontSize: FontSizes.secondaryFS
  },
  desc:{
    color :'#958E8E',
    fontWeight: "400", 
    textAlign:'center', 
    marginVertical:10,
    fontSize: 15
  },
  input:{
    alignItems:'flex-start',
     borderColor:Colors.secondaryColor, 
     borderRadius:5, 
     borderWidth:2,
     paddingVertical:5, 
     marginHorizontal:30
    },
    button_calendar:{
      flexDirection:'row', 
      alignItems:'center'
    },
    contain_modal_calendar:{
      backgroundColor:'white', 
      width:200, 
      height:200, 
      position:'absolute', 
      alignItems:'center',
      top:'0%',
    },
    inner_modal_calendar:{
      flexDirection:'row' , 
      justifyContent:'center', 
      alignItems:'center'
    },
    button_next_calendar:{
      transform:[{ rotate: "180deg" }], 
      width:15
    },
    list_day:{
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems:'center',
      marginLeft:12,
      marginTop:10
    },
    button_up_menu:{ 
      backgroundColor: Colors.secondaryColor, 
      paddingVertical:13, 
      borderRadius: 40,
      marginHorizontal:50, 
      marginTop:30
    },
    text_up_menu:{
      textAlign:'center', 
      fontWeight:'600',
      fontSize:FontSizes.font3th, 
      color:'white'
    }
});

export default PickMenu;
