import { View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Campus Connect</Text>
            <Text style={styles.description}>
                A simple UG-style student app for announcements, courses, timetables, and campus news.
            </Text>
            <Text style={styles.credit}>Built by: Yaw Asante</Text>
            <Text style={styles.credit}>Student ID: 22152286</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    appName: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
    description: { fontSize: 15, marginBottom: 20 },
    credit: { fontSize: 14, color: '#333' },
});