import { View, Text, StyleSheet } from "react-native";

export default function MenuCard({ icon, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 22,
    borderRadius: 16,
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  icon: {
    fontSize: 26,
    marginBottom: 8,
  },

  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2d3436",
  },
});