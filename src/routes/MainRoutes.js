import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  RouteBottomUser  from './RouteBottomUser';
import RegisterDay from "../screens/Customer/RegisterDay";
import Validate from "../screens/Customer/Validate";
import RegisterPacket from "../screens/Customer/RegisterPacket";
import Map from "../screens/Customer/Map";



const Stack = createNativeStackNavigator();
export default function MainRoutes() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false,
    animation: 'none'
  }}>
      <Stack.Screen name="/" component={RouteBottomUser} />
      <Stack.Screen name="Validate" component={Validate} />
      <Stack.Screen name="RegisterDay" component={RegisterDay} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  </NavigationContainer>


  );
}


