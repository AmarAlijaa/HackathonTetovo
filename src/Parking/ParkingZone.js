import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
  Alert,
} from "react-native";

const ParkingZone = () => {
  const [selectedZone, setSelectedZone] = useState("Zone 1");
  const [modalVisible, setModalVisible] = useState(false);
  const [licensePlateModalVisible, setLicensePlateModalVisible] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [licensePlate, setLicensePlate] = useState("");
  const [useCustomPlate, setUseCustomPlate] = useState(false);

  const zones = ["Zone 1", "Zone 2", "Zone 3", "Zone 4"];

  const initialParkingSpaces = {
    "Zone 1": [
      { id: "1", free: true, inuse: false },
      { id: "2", free: false, inuse: false },
      { id: "3", free: true, inuse: false },
      { id: "4", free: false, inuse: false },
    ],
    "Zone 2": [
      { id: "1", free: false, inuse: false },
      { id: "2", free: true, inuse: false },
      { id: "3", free: false, inuse: false },
      { id: "4", free: true, inuse: false },
      { id: "5", free: true, inuse: false },
    ],
    "Zone 3": [
      { id: "1", free: true, inuse: false },
      { id: "2", free: true, inuse: false },
      { id: "3", free: false, inuse: false },
      { id: "4", free: false, inuse: false },
    ],
    "Zone 4": [
      { id: "1", free: false, inuse: false },
      { id: "2", free: false, inuse: false },
      { id: "3", free: true, inuse: false },
    ],
  };

  const [parkingSpaces, setParkingSpaces] = useState(initialParkingSpaces);

  // Handle Start/Stop logic as before
  const handleSelectSpace = (spaceId) => {
    setSelectedSpace(spaceId);
    setLicensePlate("");
    setUseCustomPlate(false);
    setLicensePlateModalVisible(true);
  };

  const handleStart = () => {
    setParkingSpaces((prev) => {
      const updated = { ...prev };
      updated[selectedZone] = updated[selectedZone].map((space) =>
        space.id === selectedSpace ? { ...space, inuse: true } : space
      );
      return updated;
    });
    Alert.alert("Parking Started", "Your parking time has started!");
    setLicensePlateModalVisible(false);
    setSelectedSpace(null);
    setLicensePlate("");
    setUseCustomPlate(false);
  };

  const handleStop = (spaceId) => {
    setParkingSpaces((prev) => {
      const updated = { ...prev };
      updated[selectedZone] = updated[selectedZone].map((space) =>
        space.id === spaceId ? { ...space, inuse: false } : space
      );
      return updated;
    });
    Alert.alert("Parking Stopped", "Your parking time has stopped!");
  };

  // Modal for choosing a saved or custom plate
  const handleSelectCar = (carPlate) => {
    if (carPlate === "Other") {
      setUseCustomPlate(true);
      setLicensePlate("");
    } else {
      setUseCustomPlate(false);
      setLicensePlate(carPlate);
    }
  };

  return (
    <View style={styles.container}>
      {/* TOP (WHITE) SECTION */}
      <Text style={styles.welcomeText}>Welcome,{"\n"}Tetovar</Text>

      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.profilePic}
      />

      {/* BOTTOM (BLUE) SECTION WITH ROUNDED TOP EDGES */}
      <View style={styles.bottomBlueContainer}>
        <TouchableOpacity style={styles.zoneContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.zoneTitle}>{selectedZone}</Text>
        </TouchableOpacity>

        {/* Zone Selection Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select a Zone</Text>
              <View style={styles.dropdownOptions}>
                {zones.map((zone) => (
                  <TouchableOpacity
                    key={zone}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedZone(zone);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{zone}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* License Plate Modal */}
        <Modal visible={licensePlateModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Choose or Enter License Plate</Text>
              <View style={styles.dropdownOptions}>
                {["ABC-123", "XYZ-789", "CAB-007"].map((car, index) => (
                  <TouchableOpacity
                    key={car + index}
                    style={styles.dropdownItem}
                    onPress={() => handleSelectCar(car)}
                  >
                    <Text style={styles.dropdownItemText}>{car}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelectCar("Other")}
                >
                  <Text style={styles.dropdownItemText}>Other</Text>
                </TouchableOpacity>
              </View>

              {useCustomPlate ? (
                <TextInput
                  style={styles.input}
                  placeholder="Type Custom Plate"
                  placeholderTextColor="#888"
                  value={licensePlate}
                  onChangeText={setLicensePlate}
                />
              ) : (
                licensePlate !== "" && (
                  <Text style={styles.selectedPlateText}>
                    Selected: {licensePlate}
                  </Text>
                )
              )}

              <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setLicensePlateModalVisible(false);
                  setSelectedSpace(null);
                  setLicensePlate("");
                  setUseCustomPlate(false);
                }}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Grid of parking spaces */}
        <FlatList
          data={parkingSpaces[selectedZone]}
          keyExtractor={(item) => item.id}
          numColumns={4} 
          // or 2, 4, etc. depending on your design
          style={{ marginTop: 20 }}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 20 }}
          renderItem={({ item }) => {
            if (item.inuse) {
              return (
                <TouchableOpacity
                  style={[styles.zoneButton, { backgroundColor: "green" }]}
                  onPress={() => handleStop(item.id)}
                >
                  <Text style={styles.zoneButtonText}>Stop</Text>
                </TouchableOpacity>
              );
            } else if (item.free) {
              return (
                <TouchableOpacity
                  style={styles.zoneButton}
                  onPress={() => handleSelectSpace(item.id)}
                >
                  <Text style={styles.zoneButtonText}>{item.id}</Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <View style={[styles.zoneButton, styles.zoneButtonDisabled]}>
                  <Text style={styles.zoneButtonText}>{item.id}</Text>
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default ParkingZone;

const styles = StyleSheet.create({
  /* 1) The full screen is white */
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* The top "Welcome" text */
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003087",
    marginTop: 40,
    marginLeft: 20,
  },

  /* The round avatar in the top-right corner */
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    top: 40,
    right: 20,
  },

  /* 2) This container is the blue bottom part with a rounded top */
  bottomBlueContainer: {
    flex: 1,
    backgroundColor: "#0059CF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 100,   // push it down so top is white
    padding: 20,
  },

  /* The zone button at the top of the blue container */
  zoneContainer: {
    backgroundColor: "#D9EBFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    width: 200,
  },

  zoneTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#02387E",
  },

  /* Basic modal styling (unchanged) */
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#02387E",
  },
  dropdownOptions: {
    width: "100%",
    marginBottom: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#02387E",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#D9EBFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  closeText: {
    color: "#02387E",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "#02387E",
  },
  selectedPlateText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#02387E",
    fontWeight: "600",
  },
  startButton: {
    backgroundColor: "#D9EBFF",
    padding: 12,
    borderRadius: 5,
    marginTop: 5,
    width: "100%",
    alignItems: "center",
  },
  startButtonText: {
    color: "#02387E",
    fontWeight: "bold",
  },

  /* Each parking space button in the grid */
  zoneButton: {
    width: 60,
    height: 60,
    backgroundColor: "#D9EBFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  zoneButtonText: {
    color: "#02387E",
    fontSize: 16,
    fontWeight: "bold",
  },
  zoneButtonDisabled: {
    opacity: 0.5,
  },
});
