/**
 * Sponsor Details Screen for Organisers
 */
import { mockSponsors } from "@/data/mock-data";
import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SponsorDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const sponsor = mockSponsors.find((s) => s.id === id);

  if (!sponsor) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Sponsor not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{sponsor.company.charAt(0)}</Text>
        </View>
        <Text style={styles.company}>{sponsor.company}</Text>
        <Text style={styles.name}>{sponsor.name}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Industry</Text>
          <Text style={styles.infoValue}>{sponsor.industry}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Budget Range</Text>
          <Text style={styles.infoValue}>{sponsor.budget}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{sponsor.email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          {sponsor.company} is actively looking for sponsorship opportunities in
          the {sponsor.industry.toLowerCase()} space. They have a budget range
          of {sponsor.budget} for event sponsorships.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sponsorship Interests</Text>
        <View style={styles.interestTags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Tech Events</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Conferences</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Networking</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionsSection}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Send Proposal</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Schedule Meeting</Text>
        </Pressable>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 40,
  },
  header: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1565c0",
  },
  company: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    color: "#666",
  },
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 24,
  },
  interestTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#e3f2fd",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 13,
    color: "#1565c0",
    fontWeight: "500",
  },
  actionsSection: {
    padding: 20,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#f1f3f5",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomPadding: {
    height: 40,
  },
});
