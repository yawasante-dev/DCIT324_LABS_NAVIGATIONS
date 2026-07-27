import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const events = [
  { id: '1', title: 'UG Cultural Night', date: 'Aug 5, 2026', description: 'An evening celebrating Ghanaian culture, music, and dance at the Night Market.' },
  { id: '2', title: 'Hackathon 2026', date: 'Aug 8, 2026', description: 'A 24-hour coding competition open to all CS students, hosted in the JQB.' },
  { id: '3', title: 'Inter-Hall Games', date: 'Aug 10, 2026', description: 'Annual sports competition between the traditional halls of residence.' },
  { id: '4', title: 'Guest Lecture: AI in Africa', date: 'Aug 12, 2026', description: 'A talk on the growth of AI research and startups across the continent.' },
  { id: '5', title: 'Career Fair', date: 'Aug 15, 2026', description: 'Meet recruiters from top companies looking to hire UG graduates.' },
];

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      {events.map((e) => (
        <Link
          key={e.id}
          href={{ pathname: '/(drawer)/(tabs)/home/[id]', params: { ...e } }}
          asChild
        >
          <Pressable style={styles.card}>
            <Text style={styles.title}>{e.title}</Text>
            <Text style={styles.date}>{e.date}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { marginBottom: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontSize: 16, fontWeight: 'bold' },
  date: { fontSize: 13, color: '#666' },
});