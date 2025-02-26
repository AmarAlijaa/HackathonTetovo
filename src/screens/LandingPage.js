import React from "react";
import { View, Text, Button } from "react-native";

const LandingPage = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Landing Screen</Text>
            <Button title="Go to Log In" onPress={() => navigation.navigate("Login")} />
            <Button title="Go to Sign Up" onPress={() => navigation.navigate("Signup")} />
        </View>
    );
};

const styles = StyleSheet.create({
    bodyStyle: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#004aad",
        paddingVertical: 50,
    },
    upperHalf: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 80,
    },
    LogoDesign: {
        width: 330,
        height: 330,
        resizeMode: "contain",
        marginBottom: -30,
    },
    Slogan: {
        fontSize: 50,
        fontWeight: "800",
        color: "white",
        lineHeight: 62,
        maxWidth: 300,
        marginRight: 50,
    },
    ButtonSection: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 19,
        paddingBottom: 20,
        paddingTop: 100,
    },
    Button: {
        backgroundColor: "#fff",
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: "center",
        width: "85%",
    },
    ButtonText: {
        color: "#004aad",
        fontSize: 20,
        fontWeight: "bold",
    },
    GuestText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginTop: -5,
    },
});

export default LandingPage;
