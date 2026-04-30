import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import MenuCard from "../components/MenuCard";

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER + LOGOUT */}
      <View style={styles.headerRow}>
        <Header />

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>📊 Hospital Overview</Text>

      <View style={styles.row}>
        <StatCard title="Patients" value="120" color="#00b894" />
        <StatCard title="Doctors" value="25" color="#0984e3" />
      </View>

      <View style={styles.row}>
        <StatCard title="Appointments" value="48" color="#fdcb6e" />
        <StatCard title="Beds" value="32" color="#e17055" />
      </View>

      <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>

      <View style={styles.row}>
        <MenuCard icon="👨‍⚕️" title="Doctors" />
        <MenuCard icon="🧑‍🤝‍🧑" title="Patients" />
      </View>

      <View style={styles.row}>
        <MenuCard icon="📅" title="Appointments" />
        <MenuCard icon="💊" title="Pharmacy" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
  },

  headerRow: {
    position: "relative",
  },

  logoutBtn: {
    position: "absolute",
    right: 15,
    top: 25,
    backgroundColor: "#d63031",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 15,
  },

  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
});