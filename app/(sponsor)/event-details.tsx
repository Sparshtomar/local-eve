/**
 * Event Details Screen for Sponsors
 */
import { mockEvents } from "@/data/mock-data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Event not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{event.category}</Text>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.organiser}>by {event.organiserName}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📅 Date</Text>
          <Text style={styles.infoValue}>
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📍 Location</Text>
          <Text style={styles.infoValue}>{event.location}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About this Event</Text>
        <Text style={styles.description}>{event.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sponsorship Tiers</Text>
        {event.sponsorshipTiers.map((tier) => (
          <View key={tier.id} style={styles.tierCard}>
            <View style={styles.tierHeader}>
              <Text style={styles.tierName}>{tier.name}</Text>
              <Text style={styles.tierPrice}>
                ${tier.price.toLocaleString()}
              </Text>
            </View>
            <Text style={styles.tierAvailable}>
              {tier.available} spots available
            </Text>
            <View style={styles.benefitsList}>
              {tier.benefits.map((benefit, index) => (
                <Text key={index} style={styles.benefit}>
                  ✓ {benefit}
                </Text>
              ))}
            </View>
            <Pressable style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select This Tier</Text>
            </Pressable>
          </View>
        ))}
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
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  category: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  organiser: {
    fontSize: 14,
    color: "#0a7ea4",
  },
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 12,
  },
  infoRow: {
    gap: 4,
  },
  infoLabel: {
    fontSize: 13,
    color: "#666",
  },
  infoValue: {
    fontSize: 15,
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
  description: {
    fontSize: 15,
    color: "#333",
    lineHeight: 24,
  },
  tierCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tierHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  tierName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  tierPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0a7ea4",
  },
  tierAvailable: {
    fontSize: 13,
    color: "#666",
    marginBottom: 12,
  },
  benefitsList: {
    gap: 8,
    marginBottom: 16,
  },
  benefit: {
    fontSize: 14,
    color: "#333",
  },
  selectButton: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomPadding: {
    height: 40,
  },
});
