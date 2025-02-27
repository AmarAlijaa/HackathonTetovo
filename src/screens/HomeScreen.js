import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const options = [
        { title: "BUS", image: require("../screens/assets/images/double decker bus-rafiki.png") },
        { title: "PARKING", image: require("../screens/assets/images/Parking-amico.png") },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,{"\n"}Tetovar</Text>
                    <Text style={styles.subtitle}>Where will you go?</Text>
                </View>
                <Ionicons name="person-circle" size={60} color="white" style={styles.icon} />
            </View>

            <View style={styles.optionsContainer}>
                {options.map((item, index) => (
                    <View
                        key={index}
                        style={[styles.optionCard, index % 2 === 0 ? styles.optionRowEven : styles.optionRowOdd]}
                    >
                        <View style={styles.optionContent}>
                            <Text style={styles.optionTitle}>{item.title}</Text>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={() => {
                                    if (item.title === "PARKING") {
                                        navigation.navigate("ParkingZone");
                                    }
                                }}
                            >
                                <Text style={styles.selectText}>Select</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={item.image} style={styles.optionImage} />
                    </View>
                ))}

                <View style={styles.underConstructionContainer}>
                    <View style={styles.horizontalLine} />
                    <Text style={styles.underConstructionText}>Under Construction</Text>
                    <Image source={require("../screens/assets/images/Construction hat-rafiki.png")} style={styles.underConstructionImage} />
                </View>
            </View>


            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Ionicons name="home" size={30} color="#004aad" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("BusTicket")}>
                    <Ionicons name="ticket" size={30} color="#004aad" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <Ionicons name="person" size={30} color="#004aad" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("WalletScreen")}>
                    <Ionicons name="wallet" size={30} color="#004aad" />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#004aad",
    },
    topSection: {
        height: "25%",
        backgroundColor: "#004aad",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    welcomeText: {
        marginTop: 55,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 28,
    },
    subtitle: {
        color: "white",
        fontSize: 16,
        marginTop: 10,
    },
    optionsContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5, // Required for Android
    },
    optionCard: {
        backgroundColor: "#6499fa",
        padding: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",  // Centers content vertically
        justifyContent: "space-between",  // Ensures proper spacing
        paddingHorizontal: 40,  // Adjusts horizontal padding
        marginBottom: 15,
    },
    optionContent: {
        alignItems: "center",  // Centers items vertically
        justifyContent: "center",  // Centers items horizontally
        gap: 15,
    },
    optionTitle: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
    },
    selectButton: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,

        borderColor: "#004aad",
    },
    selectText: {
        color: "#004aad",
        fontWeight: "bold",
    },
    optionImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    optionRowEven: {
        flexDirection: "row-reverse",
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
        paddingBottom: 40,
    },
    navIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    profileIcon: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    icon: {
        marginTop: 40,
    },
    underConstructionContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    horizontalLine: {
        width: "80%",
        height: 1,
        backgroundColor: "#ccc",
        marginBottom: 10,
    },
    underConstructionText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#666",
    },
    underConstructionImage: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginTop: 25,
    },

});

export default HomeScreen;
