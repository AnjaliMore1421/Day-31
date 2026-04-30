import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🏥 MediCare Hospital</Text>
      <Text style={styles.subtitle}>Admin Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2E86DE",
    padding: 22,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#dfe6e9",
    marginTop: 4,
  },
});
