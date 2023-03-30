import React from "react";
import {View, Text, Button, Stylesheet} from "react-native"

const HomeScreen = ({navigation}) => {
    return(
        <View >
        <Text>HomeScreen</Text>
        <Button title="Click Here" onPress={() => alert("button clicked")}></Button>
        </View>
    )
}

export default HomeScreen