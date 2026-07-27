import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useProfile } from '../../../store/profileStore';

export default function Profile() {
    const { name, indexNumber, programme, level, bio } = useProfile();

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.detail}>Index Number: {indexNumber}</Text>
            <Text style={styles.detail}>Programme: {programme}</Text>
            <Text style={styles.detail}>Level: {level}</Text>
            <Text style={styles.detail}>Bio: {bio}</Text>

            <Link
                href={{
                    pathname: '/edit-profile',
                    params: { name, bio, programme },
                }}
                asChild
            >
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    name: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
    detail: { fontSize: 15, marginBottom: 6 },
    button: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 8, marginTop: 20, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 16 },
});