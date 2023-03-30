import React from "react";
import {View, Text, Button, Stylesheet} from "react-native"

const SettingsScreen = ({navigation}) => {
    return(
        <View >
        <Text>monkey</Text>
        <Button title="Click Here" onPress={() => alert("button clicked")}></Button>
        </View>
    )
}

export default SettingsScreen