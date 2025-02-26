import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const LandingPage = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.bodyStyle}>
            <View style={styles.upperHalf}>
                <Image
                    style={styles.LogoDesign}
                    source={require('../screens/assets/images/1-removebg-preview.png')}
                />
                <Text style={styles.Slogan}>
                    Your City,
                    Your Routes,
                    Your Way!
                </Text>
            </View>

            <View style={styles.ButtonSection}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={styles.ButtonText}>Sign-up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.ButtonText}>Log-in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Guest")}
                >
                    <Text style={styles.GuestText}>Continue as a guest</Text>
                </TouchableOpacity>
            </View>
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
