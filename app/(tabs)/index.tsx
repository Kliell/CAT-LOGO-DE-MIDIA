import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BookCard } from '../../components/BookCard';
import { globalStyles, Colors } from '../../assets/styles/styles';

const CATEGORIES = ['Ficção', 'Ciência', 'História', 'Fantasia', 'Romance'];

export default function HomeScreen() {
  const books = useQuery(api.books.get);
  const [activeCategory, setActiveCategory] = useState('Ficção');

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <View style={globalStyles.headerSection}>
        {/* Título Estilizado */}
        <Text style={globalStyles.title}>
          Descubra seu <Text style={globalStyles.titleAccent}>próximo livro</Text>
        </Text>
        <Text style={globalStyles.subtitle}>
          Explore milhares de livros e encontre sua próxima grande leitura.
        </Text>

        {/* Campo de Busca (Input Reutilizável) */}
        <TextInput 
          placeholder="Buscar livros, autores..." 
          placeholderTextColor={Colors.secondary}
          style={globalStyles.searchInput} 
        />

        {/* Chips de Categorias (Componentização via Map) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity 
              key={cat}
              onPress={() => setActiveCategory(cat)}
              style={[
                localStyles.chip, 
                activeCategory === cat ? localStyles.chipActive : localStyles.chipInactive
              ]}
            >
              <Text style={[
                localStyles.chipText,
                { color: activeCategory === cat ? '#FFF' : Colors.primary }
              ]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Seção Em Alta */}
        <View style={localStyles.sectionHeader}>
          <Text style={localStyles.sectionTitle}>📈 Em Alta</Text>
          <TouchableOpacity><Text style={localStyles.seeMore}>Ver todos →</Text></TouchableOpacity>
        </View>

        {/* Listagem do Convex em Grid/Horizontal */}
        <FlatList
          data={books}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <BookCard 
              title={item.title}
              author={item.author}
              coverUrl={item.coverUrl}
              onPress={() => {}}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: { backgroundColor: Colors.chipActive },
  chipInactive: { backgroundColor: Colors.chipInactive },
  chipText: { fontWeight: '600', fontSize: 14 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: Colors.primary },
  seeMore: { color: Colors.accent, fontWeight: '600', fontSize: 13 },
});

// import React from 'react';
// import { FlatList, ActivityIndicator, View, Text } from 'react-native';
// import { useQuery } from "convex/react";
// // Importa o objeto 'api' gerado automaticamente pelo Convex
// import { api } from "../../convex/_generated/api"; 
// import { BookCard } from '../../components/BookCard';
// import { globalStyles, Colors } from '../../assets/styles/styles';

// export default function HomeScreen() {
//   // Vínculo reativo: se o banco mudar, o 'books' atualiza sozinho
//   const books = useQuery(api.books.get);

//   // Estado de carregamento inicial
//   if (books === undefined) {
//     return (
//       <View style={globalStyles.centered}>
//         <ActivityIndicator size="large" color={Colors.accent} />
//       </View>
//     );
//   }

//   // Estado de lista vazia
//   if (books.length === 0) {
//     return (
//       <View style={globalStyles.centered}>
//         <Text style={{ color: Colors.secondary }}>Nenhum livro encontrado.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={globalStyles.container}>
//       <FlatList
//         data={books}
//         contentContainerStyle={globalStyles.listContent}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <BookCard 
//             title={item.title} 
//             author={item.author} 
//             coverUrl={item.coverUrl}
//             onPress={() => console.log("Clicou no livro:", item.title)} 
//           />
//         )}
//       />
//     </View>
//   );
// }