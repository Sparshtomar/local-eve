/**
 * Sign In Screen
 * Simple sign-in with mock data
 */
import {
    mockOrganisers,
    mockSponsors,
    setCurrentUser,
    User,
} from "@/data/mock-data";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    setError("");

    // Check mock sponsors
    const sponsor = mockSponsors.find((s) => s.email === email);
    if (sponsor) {
      const user: User = {
        id: sponsor.id,
        email: sponsor.email,
        name: sponsor.name,
        role: "sponsor",
        company: sponsor.company,
        createdAt: new Date().toISOString(),
      };
      setCurrentUser(user);
      router.replace("/(sponsor)");
      return;
    }

    // Check mock organisers
    const organiser = mockOrganisers.find((o) => o.email === email);
    if (organiser) {
      setCurrentUser(organiser);
      router.replace("/(organiser)");
      return;
    }

    // For demo: any email works, default to sponsor
    if (email && password) {
      const user: User = {
        id: `user-${Date.now()}`,
        email,
        name: email.split("@")[0],
        role: "sponsor",
        createdAt: new Date().toISOString(),
      };
      setCurrentUser(user);
      router.replace("/(sponsor)");
      return;
    }

    setError("Please enter email and password");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
            />
          </View>

          <Pressable style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.signUpLink}
          onPress={() => router.push("/(auth)/role-select")}
        >
          <Text style={styles.signUpText}>
            Don't have an account?{" "}
            <Text style={styles.signUpBold}>Sign up</Text>
          </Text>
        </Pressable>

        <View style={styles.demoBox}>
          <Text style={styles.demoTitle}>Demo Accounts:</Text>
          <Text style={styles.demoAccount}>Sponsor: mike@techcorp.com</Text>
          <Text style={styles.demoAccount}>Organiser: john@techevents.com</Text>
          <Text style={styles.demoHint}>(Any password works)</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    marginBottom: 24,
  },
  backText: {
    fontSize: 16,
    color: "#0a7ea4",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  error: {
    color: "#dc2626",
    marginBottom: 16,
    fontSize: 14,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#f8f9fa",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpLink: {
    marginTop: 24,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 14,
    color: "#666",
  },
  signUpBold: {
    color: "#0a7ea4",
    fontWeight: "600",
  },
  demoBox: {
    marginTop: 40,
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  demoAccount: {
    fontSize: 12,
    color: "#666",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  demoHint: {
    fontSize: 11,
    color: "#999",
    marginTop: 8,
  },
});
