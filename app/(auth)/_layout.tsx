/**
 * Auth Routes Layout
 */
import { Stack } from "expo-router";

export default function AuthRoutesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="role-select" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up-sponsor" />
      <Stack.Screen name="sign-up-organiser" />
    </Stack>
  );
}
