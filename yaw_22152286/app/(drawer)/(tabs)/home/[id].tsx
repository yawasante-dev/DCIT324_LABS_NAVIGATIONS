import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function EventDetails() {
    const { title, date, description } = useLocalSearchParams<{
        title: string;
        date: string;
        description: string;
    }>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.description}>{description}</Text>

            <Pressable style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
    date: { fontSize: 14, color: '#666', marginBottom: 16 },
    description: { fontSize: 16, lineHeight: 22 },
    button: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 8, marginTop: 24, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 16 },
});