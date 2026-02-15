/**
 * Home Screen
 * Shows different content based on auth state
 */
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign in to access all features</Text>
      <View style={styles.authLinks}>
        <Pressable
          style={styles.link}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.linkText}>Sign in</Text>
        </Pressable>
        <Pressable
          style={styles.link}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.linkText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  authLinks: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#0a7ea4",
    borderRadius: 8,
  },
  linkText: {
    color: "#fff",
    fontWeight: "600",
  },
});
