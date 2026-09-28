import { TextInput } from 'react-native';
import styles from './TextInputPassStyle';

interface TextInputPassProps {
    value: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    keyboardType?: 'default' | 'numeric';
    secureTextEntry?: boolean;
    editable?: boolean;
}

export function TextInputPass({ value, onChangeText, placeholder = 'Digite a senha', keyboardType = 'default', secureTextEntry = false, editable = true }: TextInputPassProps) {
    return (
        <>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                editable={editable}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </>
        
    );
}
