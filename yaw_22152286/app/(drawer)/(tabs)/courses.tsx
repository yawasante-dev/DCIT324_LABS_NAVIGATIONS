import { ScrollView, View, Text, StyleSheet } from 'react-native';

const courses = [
    { code: 'DCIT 324', title: 'Mobile Application Development', credits: 3 },
    { code: 'DCIT 318', title: 'Software Engineering', credits: 3 },
    { code: 'DCIT 306', title: 'Networking', credits: 3 },
    { code: 'DCIT 316', title: 'Human-Computer Interaction', credits: 2 },
    { code: 'MATH 331', title: 'Probability & Statistics', credits: 3 },
];

export default function Courses() {
    return (
        <ScrollView style={styles.container}>
            {courses.map((c, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.code}>{c.code}</Text>
                    <Text style={styles.title}>{c.title}</Text>
                    <Text style={styles.credits}>{c.credits} credit hours</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    card: { marginBottom: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
    code: { fontSize: 14, fontWeight: 'bold', color: '#2563eb' },
    title: { fontSize: 16 },
    credits: { fontSize: 13, color: '#666' },
});