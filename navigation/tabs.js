import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from '../screens/SettingsScreen';
import { StyleSheet,View,Image, Text } from "react-native";


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
      <Tab.Screen  name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused}) => (
            <View style={{alignItems: "center", justifyContent:"center", top:10}}>
                <Image source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? "#e32f45" : "#748c94"
                }}
                >
                </Image>
                <Text style = {{fontSize:12}}>Home</Text>
            </View>
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );

  
}

export default Tabs