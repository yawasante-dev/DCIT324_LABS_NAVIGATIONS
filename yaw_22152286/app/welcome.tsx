import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Campus Connect</Text>
            <Text style={styles.subtitle}>Your UG student companion app</Text>
            <Link href="/(drawer)/(tabs)/home" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
    subtitle: { fontSize: 16, marginBottom: 24 },
    button: { backgroundColor: '#2563eb', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
    buttonText: { color: 'white', fontSize: 16 },
});