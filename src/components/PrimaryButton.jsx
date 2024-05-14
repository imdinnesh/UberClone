import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        padding:15,
        width: 330,
        height: 52,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000000', // Add the color you want for the text
        fontSize: 16, // Add the font size you want for the text
    },
});

export default PrimaryButton;