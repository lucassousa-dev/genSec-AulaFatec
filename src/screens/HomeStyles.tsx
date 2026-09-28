import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F6F7FB',
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 32,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    card: {
        width: '100%',
        maxWidth: 430,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 22,
        shadowColor: '#172554',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 4,
    },
    footer: {
        color: '#8A94A6',
        fontSize: 12,
        marginTop: 22,
    }
});

export default styles;
