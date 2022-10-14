import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomePageFC  from '../screens/Customer/HomePage/Index';
import Profile  from '../screens/Customer/Profile';
import RegisterDay from '../screens/Customer/RegisterDay';
import {Colors} from '../assets/color/Colors'
import Home from "../assets/icons/Home";
import Search from "../assets/icons/Search";
import Calendar from "../assets/icons/Calendar";
import ProfileIcon from "../assets/icons/Profile"; 
import RegisterPacket from "../screens/Customer/RegisterPacket";

const Tab = createMaterialBottomTabNavigator();

 function RouteBottomFc() {
  return (
    <>
        <Tab.Navigator initialRouteName="Home"
        activeColor={Colors.secondaryColor }
        inactiveColor="#AAAAAA"
       
        barStyle={{ backgroundColor: 'white' }} 
          >
            <Tab.Screen name="Home" component={HomePageFC}   
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <Home  width={26} height={24} color={color}/>
          ),
        }}/>
         <Tab.Screen name="RegisterDay" component={RegisterDay}   
        options={{
          tabBarLabel: 'Tìm tài xế',
          tabBarIcon: ({ color }) => (
            <Search  width={26} height={24} color={color}/>
          ),
        }}/>
         <Tab.Screen name="Packet" component={RegisterPacket}   
        options={{
          tabBarLabel: 'Dịch vụ gói',
          tabBarIcon: ({ color }) => (
            <Calendar  width={26} height={24} color={color}/>
          ),
        }}/>
           <Tab.Screen name="Profile" component={Profile}   
        options={{
          tabBarLabel: 'Trang cá nhân',
          tabBarIcon: ({ color }) => (
            <ProfileIcon  width={26} height={24} color={color}/>
          ),
        }}/>
           
        </Tab.Navigator>
        
      </>
    
  );
}

export default RouteBottomFc;