import { useState } from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';
import { styles } from './ButtonPassStyle';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import generatePassword from '../../services/passwordService';

export function ButtonPass() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState('12');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleGenButton() {
        const length = Math.min(64, Math.max(4, Number.parseInt(passwordLength, 10) || 12));
        setPasswordLength(String(length));
        setPassword(generatePassword(length));
    }

    function handleLengthChange(value: string) {
        setPasswordLength(value.replace(/[^0-9]/g, '').slice(0, 2));
    }

    const strength = password.length >= 16 ? 'Forte' : password.length >= 10 ? 'M\u00e9dia' : 'B\u00e1sica';

    return (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>Sua senha</Text>
            <Text style={styles.helper}>{'Uma combina\u00e7\u00e3o aleat\u00f3ria e segura para voc\u00ea usar.'}</Text>
            <View style={styles.passwordRow}>
                <TextInputPass value={password} placeholder={'Sua senha aparecer\u00e1 aqui'} secureTextEntry={!isPasswordVisible} editable={false} />
                <Pressable accessibilityRole="button" accessibilityLabel={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'} onPress={() => setIsPasswordVisible((visible) => !visible)} style={({ pressed }) => [styles.eyeButton, pressed && styles.buttonPressed]}>
                    <Text style={styles.eyeText}>{isPasswordVisible ? 'Ocultar' : 'Exibir'}</Text>
                </Pressable>
            </View>
            <View style={styles.lengthHeader}>
                <Text style={styles.label}>Tamanho da senha</Text>
                <Text style={styles.range}>{'4 \u2014 64 caracteres'}</Text>
            </View>
            <TextInput value={passwordLength} onChangeText={handleLengthChange} style={styles.lengthInput} keyboardType="numeric" maxLength={2} placeholder="12" accessibilityLabel="Tamanho da senha" />
            {password ? <Text style={styles.strength}>{'For\u00e7a estimada: '}<Text style={styles.strengthValue}>{strength}</Text></Text> : null}
            <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleGenButton}>
                <Text style={styles.text}>Gerar nova senha</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]} onPress={() => setPassword('')}>
                <Text style={styles.secondaryText}>Limpar</Text>
            </Pressable>
        </View>
    );
}
