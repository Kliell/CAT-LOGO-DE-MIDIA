import { StyleSheet } from 'react-native';

export const Colors = {
  background: '#FCF9F6', 
  surface: '#FFFFFF',
  primary: '#1A1D23',    
  accent: '#F39C12',     
  secondary: '#6F7782',  
  border: '#E8E4E1',
};

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerSection: { paddingHorizontal: 20, paddingTop: 60 },
  title: { fontSize: 32, fontWeight: '800', color: Colors.primary },
  titleAccent: { color: Colors.accent, fontStyle: 'italic' },
  subtitle: { fontSize: 14, color: Colors.secondary, marginTop: 8, marginBottom: 20 },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  }
});