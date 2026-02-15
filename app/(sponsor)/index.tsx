/**
 * Sponsor Dashboard
 * Shows available events for sponsors to browse and sponsor
 */
import {
    Event,
    getCurrentUser,
    mockEvents,
    setCurrentUser,
} from "@/data/mock-data";
import { useRouter } from "expo-router";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

function EventCard({ event, onPress }: { event: Event; onPress: () => void }) {
  const lowestTier = event.sponsorshipTiers.reduce((min, tier) =>
    tier.price < min.price ? tier : min,
  );

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={styles.category}>{event.category}</Text>
        <Text style={styles.date}>
          {new Date(event.date).toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.cardTitle}>{event.title}</Text>
      <Text style={styles.organiser}>by {event.organiserName}</Text>
      <Text style={styles.location}>📍 {event.location}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {event.description}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={styles.tiersCount}>
          {event.sponsorshipTiers.length} sponsorship tiers
        </Text>
        <Text style={styles.price}>
          From ${lowestTier.price.toLocaleString()}
        </Text>
      </View>
    </Pressable>
  );
}

export default function SponsorDashboard() {
  const router = useRouter();
  const user = getCurrentUser();

  const handleLogout = () => {
    setCurrentUser(null);
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.name || "Sponsor"}</Text>
        </View>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{mockEvents.length}</Text>
          <Text style={styles.statLabel}>Available Events</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Sponsorships</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Discover Events</Text>

      <FlatList
        data={mockEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() =>
              router.push({
                pathname: "/(sponsor)/event-details",
                params: { id: item.id },
              })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  greeting: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  logoutButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f1f3f5",
    borderRadius: 8,
  },
  logoutText: {
    color: "#666",
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 16,
    gap: 12,
    backgroundColor: "#fff",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565c0",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    padding: 20,
    paddingBottom: 12,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  category: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: "600",
  },
  date: {
    fontSize: 13,
    color: "#666",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  organiser: {
    fontSize: 13,
    color: "#0a7ea4",
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  tiersCount: {
    fontSize: 13,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0a7ea4",
  },
});
