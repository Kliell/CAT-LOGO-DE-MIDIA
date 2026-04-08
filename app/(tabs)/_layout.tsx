import { Tabs } from 'expo-router';
import { Colors } from '../../assets/styles/styles';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.accent,
      headerShown: true, // Garante que o título apareça
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Biblioteca',
        }}
      />
    </Tabs>
  );
}