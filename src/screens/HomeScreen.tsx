// src/screens/HomeScreen.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../styles/screens/HomeScreen.styles';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const { colors, isDark, toggleTheme } = useTheme();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla Principal</Text>
            <Text style={styles.subtitle}>¡Mi primera app que emoción!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('About')}
            >
                <MaterialCommunityIcons name="information-outline" size={20} color="white" style={styles.buttonIcon} />
                <Text style={[styles.buttonText, { color: 'white' }]}>Ir a Acerca De</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.buttonSecondary]}
                onPress={() => navigation.navigate('Technologies')}
            >
                <MaterialCommunityIcons name="code-tags" size={20} color={colors.primary} style={styles.buttonIcon} />
                <Text style={[styles.buttonText, { color: colors.primary }]}>
                    Ver Tecnologías
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default HomeScreen;
