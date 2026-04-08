import React, { useState } from 'react';
import { 
  View, Text, TextInput, FlatList, ScrollView, 
  TouchableOpacity, StyleSheet, ActivityIndicator, Modal, Alert 
} from 'react-native';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BookCard } from '../../components/BookCard';
import { CustomInput } from '../../components/CustomInput';
import { globalStyles, Colors } from '../../assets/styles/styles';

export default function HomeScreen() {
  const books = useQuery(api.books.get);
  const addBook = useMutation(api.books.createBook);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({ title: '', author: '', coverUrl: '' });

  const handleSave = async () => {
    if (!form.title || !form.author || !form.coverUrl) {
      return Alert.alert("Ops!", "Preencha todos os campos.");
    }
    try {
      await addBook({ ...form, description: "Novo livro" });
      setModalVisible(false);
      setForm({ title: '', author: '', coverUrl: '' });
    } catch (e) {
      Alert.alert("Erro", "Não foi possível conectar ao banco.");
    }
  };

  if (books === undefined) {
    return (
      <View style={globalStyles.centered}>
        <ActivityIndicator size="large" color={Colors.accent} />
        <Text style={{ marginTop: 10, color: Colors.secondary }}>Conectando ao Convex...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.headerSection}>
          <Text style={globalStyles.title}>
            Descubra seu <Text style={globalStyles.titleAccent}>próximo livro</Text>
          </Text>
          <Text style={globalStyles.subtitle}>Explore sua biblioteca em tempo real.</Text>
          
          <TextInput placeholder="Buscar livros..." style={globalStyles.searchInput} />

          <Text style={localStyles.sectionTitle}>📚 Minha Coleção</Text>
          
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
            ListEmptyComponent={<Text>Sua estante está vazia.</Text>}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={localStyles.fab} onPress={() => setModalVisible(true)}>
        <Text style={localStyles.fabIcon}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={localStyles.modalOverlay}>
          <View style={localStyles.modalContent}>
            <Text style={localStyles.modalHeader}>Adicionar Livro</Text>
            <CustomInput 
              placeholder="Título" 
              value={form.title} 
              onChangeText={(t) => setForm({...form, title: t})} 
            />
            <CustomInput 
              placeholder="Autor" 
              value={form.author} 
              onChangeText={(t) => setForm({...form, author: t})} 
            />
            <CustomInput 
              placeholder="URL da Imagem" 
              value={form.coverUrl} 
              onChangeText={(t) => setForm({...form, coverUrl: t})} 
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={localStyles.btnCancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={localStyles.btnSave}>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: Colors.primary },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: Colors.primary, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  fabIcon: { color: '#FFF', fontSize: 30 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#FFF', borderRadius: 20, padding: 20 },
  modalHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  btnSave: { backgroundColor: Colors.accent, padding: 15, borderRadius: 10, flex: 0.48, alignItems: 'center' },
  btnCancel: { backgroundColor: '#EEE', padding: 15, borderRadius: 10, flex: 0.48, alignItems: 'center' },
});