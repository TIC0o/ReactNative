// src/screens/AboutScreen.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../styles/screens/AboutScreen.styles';

const AboutScreen = () => {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Acerca De Mi App</Text>

                <View style={styles.infoCard}>
                    <Text style={styles.subtitle}>
                        <MaterialCommunityIcons name="account-tie" size={20} /> Desarrollado por
                    </Text>
                    <Text style={styles.description}>
                        Eliecer Guevara Fuentes{'\n'}
                        Estudiante de Ingeniería de Software{'\n'}
                        Universidad FESC
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.subtitle}>
                        <MaterialCommunityIcons name="rocket-launch" size={20} /> Tecnologías Utilizadas
                    </Text>
                    <Text style={styles.description}>
                        • React Native{'\n'}
                        • Expo{'\n'}
                        • React Navigation{'\n'}
                        • TypeScript{'\n'}
                        • StyleSheet
                    </Text>
                </View>



                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name="arrow-left" size={20} color="white" style={styles.backIcon} />
                    <Text style={styles.backButtonText}>Volver</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AboutScreen;
