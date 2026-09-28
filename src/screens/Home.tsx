import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TextInputPass';
import { ButtonPass } from '../components/ButtonPass/ButtonPass';

import styles from './HomeStyles';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.card}>
                    <ButtonPass />
                </View>
                <Text style={styles.footer}>Gere senhas fortes em poucos segundos</Text>
                <StatusBar style="dark" />
            </ScrollView>
        </SafeAreaView>
        
    );
}
