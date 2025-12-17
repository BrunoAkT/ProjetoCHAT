import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Style.data';

interface StyledBackgroundProps {
    children: React.ReactNode;
}

export default function StyledBackground({ children }: StyledBackgroundProps) {
    return (
        <LinearGradient
            colors={[Colors.backgroudGradient, Colors.backgroudGradientTOO]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
});
