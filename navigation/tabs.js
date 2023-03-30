import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from '../screens/SettingsScreen';
import { StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
        }
    }}

    >
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );

  
}

export default Tabs