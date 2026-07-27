import { ScrollView, View, Text, StyleSheet } from 'react-native';

const announcements = [
    { title: 'Mid-Semester Exams', date: 'Aug 3, 2026', text: 'Mid-semester exams begin next week. Check your timetable.' },
    { title: 'Library Extended Hours', date: 'Jul 28, 2026', text: 'The Balme Library will now be open until midnight during exams.' },
    { title: 'SRC General Meeting', date: 'Jul 25, 2026', text: 'All students invited to the Great Hall for the SRC town hall.' },
    { title: 'Wi-Fi Maintenance', date: 'Jul 22, 2026', text: 'Campus Wi-Fi will be down for maintenance from 1am-4am.' },
    { title: 'Career Fair 2026', date: 'Jul 20, 2026', text: 'Top companies will be recruiting at the Night Market grounds.' },
];

export default function Announcements() {
    return (
        <ScrollView style={styles.container}>
            {announcements.map((a, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.title}>{a.title}</Text>
                    <Text style={styles.date}>{a.date}</Text>
                    <Text style={styles.text}>{a.text}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    card: { marginBottom: 16, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
    title: { fontSize: 16, fontWeight: 'bold' },
    date: { fontSize: 12, color: '#666', marginBottom: 4 },
    text: { fontSize: 14 },
});