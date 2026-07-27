import { ScrollView, View, Text, StyleSheet } from 'react-native';

const faqs = [
    { q: 'How do I check my exam schedule?', a: 'Go to the Timetable tab in your Dashboard.' },
    { q: 'How do I update my profile?', a: 'Go to Profile tab and tap "Edit Profile".' },
    { q: 'Who do I contact for IT issues?', a: 'Email ithelpdesk@ug.edu.gh.' },
    { q: 'Where can I see announcements?', a: 'Open the drawer menu and select Announcements.' },
];

export default function Help() {
    return (
        <ScrollView style={styles.container}>
            {faqs.map((item, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.question}>{item.q}</Text>
                    <Text style={styles.answer}>{item.a}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    card: { marginBottom: 16 },
    question: { fontSize: 15, fontWeight: 'bold' },
    answer: { fontSize: 14, color: '#333', marginTop: 4 },
});