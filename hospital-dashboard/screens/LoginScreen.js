import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* APP TITLE */}
      <Text style={styles.title}>🏥 MediCare Hospital</Text>
      <Text style={styles.subtitle}>Secure Admin Login</Text>

      {/* LOGIN BOX */}
      <View style={styles.box}>

        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Enter email" style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Enter password" secureTextEntry style={styles.input} />

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Dashboard")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E86DE",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#dfe6e9",
    textAlign: "center",
    marginBottom: 20,
  },

  box: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,

    // shadow
    elevation: 6,
  },

  label: {
    fontSize: 13,
    marginBottom: 5,
    color: "#2d3436",
  },

  input: {
    backgroundColor: "#f1f2f6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#00b894",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
