import { Stack } from 'expo-router';
// Importamos o ConvexReactClient em vez do HttpClient
import { ConvexReactClient, ConvexProvider } from "convex/react";
import { View, ActivityIndicator } from 'react-native';
import { globalStyles, Colors } from '../assets/styles/styles';

// 1. Instancia o cliente padrão (WebSocket)
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
      <Stack screenOptions={{ 
        headerStyle: { backgroundColor: Colors.surface },
        headerTintColor: Colors.primary,
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ConvexProvider>
  );
}