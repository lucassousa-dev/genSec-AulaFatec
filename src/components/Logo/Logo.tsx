import { View, Text } from 'react-native';
import styles from './LogoStyle';

export function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.mark}>
                <Text style={styles.markText}>{'\u2726'}</Text>
            </View>
            <Text style={styles.title}>SEC PASS</Text>
            <Text style={styles.subtitle}>Gerador de senhas seguras</Text>
        </View>
    );
}
