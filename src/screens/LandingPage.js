import React from "react";
import { View, Text, Button } from "react-native";

const LandingPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Landing Screen</Text>
            <Button title="Go to Log In" onPress={() => navigation.navigate("Login")} />
            <Button title="Go to Sign Up" onPress={() => navigation.navigate("Signup")} />
        </View>
    );
};

export default LandingPage;
