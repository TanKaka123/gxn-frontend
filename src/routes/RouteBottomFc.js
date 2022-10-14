import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomePageFC  from '../screens/FC/HomePage';
import Profile  from '../screens/FC/Profile';
import CreateMenu from '../screens/FC/PickMenu';
import {Colors} from '../assets/color/Colors'
import Home from "../assets/icons/Home";
import Menu from "../assets/icons/Menu";
import ProfileIcon from "../assets/icons/Profile"; 

const Tab = createMaterialBottomTabNavigator();

export function RouteBottomFc() {
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
            <Tab.Screen name="Tạo menu" component={CreateMenu} options={{
          tabBarLabel: 'Tạo menu',
          tabBarIcon: ({ color }) => (
            <Menu  width={22} height={25} color={color}/>
          ),
        }}/>
            <Tab.Screen name="Trang cá nhân" component={Profile} options={{
          tabBarLabel: 'Trang cá nhân',
          tabBarIcon: ({ color }) => ( 
            <ProfileIcon  width={24} height={24} color={color}/>
          ),
        }}/>
        </Tab.Navigator>
        
      </>
    
  );
}