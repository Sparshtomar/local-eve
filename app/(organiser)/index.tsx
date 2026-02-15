/**
 * Organiser Dashboard
 * Shows available sponsors and their own events
 */
import {
    getCurrentUser,
    mockEvents,
    mockSponsors,
    setCurrentUser,
    Sponsor,
} from "@/data/mock-data";
import { useRouter } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

function SponsorCard({
  sponsor,
  onPress,
}: {
  sponsor: Sponsor;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.sponsorCard} onPress={onPress}>
      <View style={styles.sponsorAvatar}>
        <Text style={styles.sponsorInitial}>{sponsor.company.charAt(0)}</Text>
      </View>
      <View style={styles.sponsorInfo}>
        <Text style={styles.sponsorCompany}>{sponsor.company}</Text>
        <Text style={styles.sponsorName}>{sponsor.name}</Text>
        <View style={styles.sponsorMeta}>
          <Text style={styles.industry}>{sponsor.industry}</Text>
          <Text style={styles.budget}>{sponsor.budget}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function EventMiniCard({ event }: { event: (typeof mockEvents)[0] }) {
  return (
    <View style={styles.eventMiniCard}>
      <Text style={styles.eventMiniTitle}>{event.title}</Text>
      <Text style={styles.eventMiniDate}>
        {new Date(event.date).toLocaleDateString()}
      </Text>
      <Text style={styles.eventMiniTiers}>
        {event.sponsorshipTiers.length} tiers
      </Text>
    </View>
  );
}

export default function OrganiserDashboard() {
  const router = useRouter();
  const user = getCurrentUser();

  // Filter events by current organiser (mock: show first 2 as "my events")
  const myEvents = mockEvents.slice(0, 2);

  const handleLogout = () => {
    setCurrentUser(null);
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{user?.name || "Organiser"}</Text>
          </View>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: "#e3f2fd" }]}>
            <Text style={[styles.statNumber, { color: "#1565c0" }]}>
              {myEvents.length}
            </Text>
            <Text style={styles.statLabel}>My Events</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: "#e8f5e9" }]}>
            <Text style={[styles.statNumber, { color: "#2e7d32" }]}>
              {mockSponsors.length}
            </Text>
            <Text style={styles.statLabel}>Active Sponsors</Text>
          </View>
        </View>

        {/* My Events Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Events</Text>
            <Pressable
              onPress={() => router.push("/(organiser)/create-event")}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>+ New Event</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsScroll}
          >
            {myEvents.map((event) => (
              <EventMiniCard key={event.id} event={event} />
            ))}
          </ScrollView>
        </View>

        {/* Sponsors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Sponsors</Text>
          <Text style={styles.sectionSubtitle}>
            Connect with sponsors looking for events like yours
          </Text>
        </View>

        {mockSponsors.map((sponsor) => (
          <View key={sponsor.id} style={styles.sponsorContainer}>
            <SponsorCard
              sponsor={sponsor}
              onPress={() =>
                router.push({
                  pathname: "/(organiser)/sponsor-details",
                  params: { id: sponsor.id },
                })
              }
            />
          </View>
        ))}

        <View style={styles.bottomPadding} />
      </ScrollView>
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
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  section: {
    padding: 20,
    paddingBottom: 0,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#0a7ea4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  eventsScroll: {
    gap: 12,
    paddingBottom: 8,
  },
  eventMiniCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  eventMiniTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  eventMiniDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  eventMiniTiers: {
    fontSize: 12,
    color: "#0a7ea4",
    fontWeight: "500",
  },
  sponsorContainer: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sponsorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sponsorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  sponsorInitial: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565c0",
  },
  sponsorInfo: {
    flex: 1,
  },
  sponsorCompany: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 2,
  },
  sponsorName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  sponsorMeta: {
    flexDirection: "row",
    gap: 12,
  },
  industry: {
    fontSize: 12,
    color: "#0a7ea4",
    backgroundColor: "#e3f2fd",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  budget: {
    fontSize: 12,
    color: "#2e7d32",
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  bottomPadding: {
    height: 40,
  },
});
