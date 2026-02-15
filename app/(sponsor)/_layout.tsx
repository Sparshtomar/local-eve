/**
 * Sponsor Routes Layout
 */
import { Stack } from "expo-router";

export default function SponsorLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="event-details"
        options={{ headerShown: true, title: "Event Details" }}
      />
    </Stack>
  );
}
