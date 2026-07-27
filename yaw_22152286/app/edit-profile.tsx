import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useProfile } from '../store/profileStore';

export default function EditProfile() {
    const params = useLocalSearchParams<{ name: string; bio: string; programme: string }>();
    const updateProfile = useProfile((s) => s.update);

    const [name, setName] = useState(params.name ?? '');
    const [bio, setBio] = useState(params.bio ?? '');
    const [programme, setProgramme] = useState(params.programme ?? '');

    const handleSave = () => {
        updateProfile({ name, bio, programme });
        router.back();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Bio</Text>
            <TextInput style={styles.input} value={bio} onChangeText={setBio} />

            <Text style={styles.label}>Programme</Text>
            <TextInput style={styles.input} value={programme} onChangeText={setProgramme} />

            <Pressable style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 14, fontWeight: '600', marginTop: 16, marginBottom: 4 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16 },
    button: { backgroundColor: '#2563eb', paddingVertical: 12, borderRadius: 8, marginTop: 24, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 16 },
});