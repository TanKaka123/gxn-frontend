import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  RouteBottomUser  from './RouteBottomUser';


const Stack = createNativeStackNavigator();
export default function MainRoutes() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false,
    animation: 'none'
  }}>
      <Stack.Screen name="/" component={RouteBottomUser} />
            
    </Stack.Navigator>
  </NavigationContainer>


  );
}


