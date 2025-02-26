import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Log in</Text>
            <Button title="Go Back" onPress={() => navigation.navigate("Landing")} />
            <Button title="Go to Sign Up" onPress={() => navigation.navigate("Signup")} />
        </View>
    );
};

export default LoginScreen;
