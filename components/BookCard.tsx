import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../assets/styles/styles';

interface BookProps {
  title: string;
  author: string;
  coverUrl: string;
  rating?: number;
  year?: number;
  onPress: () => void;
}

export const BookCard = ({ title, author, coverUrl, rating = 4.5, year = 2024, onPress }: BookProps) => (
  <TouchableOpacity style={localStyles.card} onPress={onPress} activeOpacity={0.9}>
    <Image source={{ uri: coverUrl }} style={localStyles.image} />
    <View style={localStyles.details}>
      <Text numberOfLines={1} style={localStyles.title}>{title}</Text>
      <Text numberOfLines={1} style={localStyles.author}>{author}</Text>
      <View style={localStyles.footer}>
        <Text style={localStyles.rating}>★ {rating}</Text>
        <Text style={localStyles.year}>{year}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const localStyles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 12,
    backgroundColor: '#EEE',
  },
  details: {
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
  },
  author: {
    fontSize: 13,
    color: Colors.secondary,
    marginVertical: 2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.accent,
    marginRight: 8,
  },
  year: {
    fontSize: 12,
    color: Colors.secondary,
  }
});
