import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User" screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerTintColor: 'white',
        drawerActiveTintColor: '#3c0a6b',
        drawerActiveBackgroundColor: '#f0e1ff',
        // drawerStyle: {
        //   backgroundColor: '#ccc'
        // }
      }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
          drawerLabel: 'Welcome screen',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }} />
        <Drawer.Screen name="User" component={UserScreen} options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
