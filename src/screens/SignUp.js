import React from "react";
import { View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Sign Up</Text>
            <Button title="Go Back" onPress={() => navigation.navigate("Landing")} />
            <Button title="Go to Log In" onPress={() => navigation.navigate("Login")} />
        </View>
    );
};

export default SignupScreen;
