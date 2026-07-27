import { ScrollView, View, Text, StyleSheet } from 'react-native';

const timetable = [
    { day: 'Monday', time: '8:00 - 10:00', course: 'DCIT 324', venue: 'JQB Auditorium' },
    { day: 'Monday', time: '10:00 - 12:00', course: 'DCIT 318', venue: 'CS Dept. Lab 2' },
    { day: 'Tuesday', time: '9:00 - 11:00', course: 'DCIT 306', venue: 'Legon Hall Annex A' },
    { day: 'Wednesday', time: '2:00 - 4:00', course: 'DCIT 316', venue: 'Business School LT2' },
    { day: 'Thursday', time: '1:00 - 3:00', course: 'MATH 331', venue: 'Great Hall Annex' },
];

export default function Timetable() {
    return (
        <ScrollView style={styles.container}>
            {timetable.map((t, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.day}>{t.day} • {t.time}</Text>
                    <Text style={styles.course}>{t.course}</Text>
                    <Text style={styles.venue}>{t.venue}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    card: { marginBottom: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
    day: { fontSize: 13, fontWeight: 'bold', color: '#2563eb' },
    course: { fontSize: 16 },
    venue: { fontSize: 13, color: '#666' },
});