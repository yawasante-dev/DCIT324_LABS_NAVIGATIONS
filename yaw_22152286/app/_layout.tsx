import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(drawer)" />
        <Stack.Screen
          name="edit-profile"
          options={{ headerShown: true, presentation: 'modal', title: 'Edit Profile' }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}