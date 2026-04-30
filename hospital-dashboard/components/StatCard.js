import { View, Text, StyleSheet } from "react-native";

export default function StatCard({ title, value, color }) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 18,
    borderRadius: 16,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,

    borderLeftWidth: 6,
  },

  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d3436",
  },

  title: {
    marginTop: 4,
    color: "gray",
    fontSize: 13,
  },
});