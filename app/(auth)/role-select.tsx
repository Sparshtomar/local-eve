/**
 * Role Selection Screen
 * Users choose whether they are a Sponsor or Organiser
 */
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RoleSelectScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join LocalEve</Text>
      <Text style={styles.subtitle}>How do you want to use LocalEve?</Text>

      <View style={styles.cardsContainer}>
        <Pressable
          style={styles.card}
          onPress={() => router.push("/(auth)/sign-up-organiser")}
        >
          <Text style={styles.cardEmoji}>🎪</Text>
          <Text style={styles.cardTitle}>I'm an Organiser</Text>
          <Text style={styles.cardDescription}>
            Create events and find sponsors to support your events
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => router.push("/(auth)/sign-up-sponsor")}
        >
          <Text style={styles.cardEmoji}>💼</Text>
          <Text style={styles.cardTitle}>I'm a Sponsor</Text>
          <Text style={styles.cardDescription}>
            Discover events and sponsorship opportunities for your brand
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.signInLink}
        onPress={() => router.push("/(auth)/sign-in")}
      >
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={styles.signInBold}>Sign in</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 32,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    padding: 24,
    borderWidth: 2,
    borderColor: "#e9ecef",
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  signInLink: {
    marginTop: 32,
    alignItems: "center",
  },
  signInText: {
    fontSize: 14,
    color: "#666",
  },
  signInBold: {
    color: "#0a7ea4",
    fontWeight: "600",
  },
});
