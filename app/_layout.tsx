/**
 * Root Layout
 * Configures global providers and navigation structure
 */
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(sponsor)" />
        <Stack.Screen name="(organiser)" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
