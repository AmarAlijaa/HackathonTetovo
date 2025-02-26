import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.bodyStyle}>
            {/* Blue Section */}
            <View style={styles.BlueHalf}>
                <Text style={styles.title}>Log In</Text>

                {/* Input Fields */}
                <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#ddd" />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ddd" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ddd" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#ddd" secureTextEntry />

                {/* Continue Button */}
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>

                {/* Log-in and Guest Texts inside Blue Section */}
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.SignUpText}>
                        Already have an account? <Text style={styles.SignUpLink}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>

                <Text style={styles.guestText}>Continue as guest</Text>
            </View>

            {/* White Section with SVG Illustration */}
            <View style={styles.WhiteHalf}>
                <Image
                    source={require("./assets/images/City.png")} // Path to your PNG file
                    style={styles.illustration}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bodyStyle: {
        flex: 1,
        backgroundColor: "white",
    },
    BlueHalf: {
        flex: 0.65,
        backgroundColor: "#004aad",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: "hidden",
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    WhiteHalf: {
        flex: 0.35,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Slight transparency
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        color: "white",
        fontSize: 16,
        marginBottom: 12,
    },
    continueButton: {
        backgroundColor: "white",
        width: "100%",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    continueButtonText: {
        color: "#004aad",
        fontSize: 18,
        fontWeight: "bold",
    },
    SignUpText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 15,
    },
    SignUpLink: {
        color: "#fff",
        textDecorationLine: "underline",
    },
    guestText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ddd",
        marginTop: 5,
    },
    illustration: {
        width: "100%", // Reduce width
        height: "100%", // Reduce height
        maxWidth: 300, // Set a max width
        maxHeight: 230, // Set a max height
    },

});

export default LoginScreen;
