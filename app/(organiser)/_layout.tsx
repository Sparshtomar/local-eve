/**
 * Organiser Routes Layout
 */
import { Stack } from "expo-router";

export default function OrganiserLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="sponsor-details"
        options={{ headerShown: true, title: "Sponsor Details" }}
      />
      <Stack.Screen
        name="create-event"
        options={{ headerShown: true, title: "Create Event" }}
      />
    </Stack>
  );
}
