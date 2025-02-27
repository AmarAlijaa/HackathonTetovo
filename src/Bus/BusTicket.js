import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BusTicket = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);


    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,{"\n"}Tetovar</Text>
                </View>
                <Ionicons name="person-circle" size={60} color="white" style={styles.icon} />
            </View>

            <View style={styles.ticketContainer}>
                <Text style={styles.ticketTitle}>Your Ticket</Text>
                <View style={styles.ticket}>
                    <Text style={styles.ticketType}>Day Ticket</Text>
                    <Text style={styles.ticketInfo}>Your ticket is available 30 minutes from the moment you purchase</Text>
                    <View style={styles.detailsRow}>
                        <View>
                            <Text style={styles.detailLabel}>ZONE</Text>
                            <Text style={styles.detailValue}>Zone A1</Text>
                        </View>
                        <View>
                            <Text style={styles.detailLabel}>NUMBER</Text>
                            <Text style={styles.detailValue}>01</Text>
                        </View>
                    </View>
                    <View style={styles.detailsRow}>
                        <View>
                            <Text style={styles.detailLabel}>DATE</Text>
                            <Text style={styles.detailValue}>01.01.2025</Text>
                        </View>
                        <View>
                            <Text style={styles.detailLabel}>TOTAL</Text>
                            <Text style={styles.detailValue}>20den</Text>
                        </View>
                    </View>

                    {/* Barcode Image */}
                    <View style={styles.barcodeContainer}>
                        <Image source={require('./assets/images/barcode.png')} style={styles.barcodeImage} />
                    </View>
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
        backgroundColor: "#fff",
    },
    topSection: {
        height: "25%",
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    welcomeText: {
        marginTop: 55,
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 28,
        color: "#004aad",
    },
    ticketContainer: {
        flex: 1,  // Adjusted height by reducing by 20%
        backgroundColor: "#004aad",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
    },
    ticketTitle: {
        fontSize: 25, // Increased font size
        fontWeight: "bold",
        marginBottom: 15,
        color: "white",
    },
    ticket: {
        flex: 0.85,
        backgroundColor: "white",
        padding: 15, // Made the padding a bit narrower
        borderRadius: 15,
        justifyContent: "space-between",
        maxWidth: 300,
        marginHorizontal: 40,
        marginTop: 20,
    },
    ticketType: {
        fontSize: 20, // Increased font size
        fontWeight: "bold",
        marginBottom: 5,
        color: "#004aad",
    },
    ticketInfo: {
        fontSize: 16, // Increased font size
        color: "black",
        marginBottom: 10,
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    detailLabel: {
        fontSize: 12,
        color: "#555",
    },
    detailValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    barcodeContainer: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    barcodeImage: {
        width: 200,  // Adjust width
        height: 80,  // Adjust height
        resizeMode: "contain",
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
    icon: {
        marginTop: 40,
        color: "#004aad",
    },
});

export default BusTicket;
