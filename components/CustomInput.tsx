import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../assets/styles/styles';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomInput = ({ placeholder, value, onChangeText }: InputProps) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={Colors.secondary}
    value={value}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
    fontSize: 16,
  },
});