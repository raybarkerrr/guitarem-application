import React from "react";
import {View, Text, Button,} from "react-native";
import { StyleSheet } from "react-native";


const HomeScreen = ({navigation}) => {
    return(
        <View>
        <Text style ={styles.container}>Monkey woo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color:"blue",
        padding: 50,
        fontSize:40,
    }
})
export default HomeScreen