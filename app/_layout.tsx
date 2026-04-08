import { Stack } from 'expo-router';
import { ConvexReactClient, ConvexProvider } from "convex/react";
import { View, ActivityIndicator } from 'react-native';
import { globalStyles, Colors } from '../assets/styles/styles';

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export default function RootLayout() {
  if (!convexUrl) {
    return (
      <View style={globalStyles.centered}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ConvexProvider>
  );
}