import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const SignupScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.bodyStyle}>
            {/* Blue Section */}
            <View style={styles.BlueHalf}>
                <Text style={styles.title}>Create Account</Text>

                {/* Input Fields */}
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#ddd" />
                <TextInput style={styles.input} placeholder="Surname" placeholderTextColor="#ddd" />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ddd" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#ddd" keyboardType="phone-pad" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ddd" secureTextEntry />

                {/* Age & Gender Row */}
                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Age" placeholderTextColor="#ddd" keyboardType="numeric" />
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Gender" placeholderTextColor="#ddd" />
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity style={styles.continueButton}  onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={styles.continueButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Log-in and Guest Texts inside Blue Section */}
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>
                        Already have an account? <Text style={styles.loginLink}>Log in</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    <Text style={styles.guestText}>Continue as a guest</Text>
                </TouchableOpacity>
            </View>

            {/* White Section with Illustration */}
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
        flex: 0.75,
        backgroundColor: "#004aad",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: "hidden",
        paddingHorizontal: 20,
        paddingTop: 80,
        borderBottom: 80,
    },
    WhiteHalf: {
        flex: 0.25,
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    halfInput: {
        width: "48%", // Ensures both inputs fit in one row with spacing
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
    loginText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 15,
    },
    loginLink: {
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
        width: "70%",
        height: "60%",
        maxWidth: 250,
        maxHeight: 180,
    },
});

export default SignupScreen;
