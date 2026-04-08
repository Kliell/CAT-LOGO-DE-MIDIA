import { StyleSheet } from 'react-native';

export const Colors = {
  background: '#FCF9F6', // Creme suave da imagem
  surface: '#FFFFFF',
  primary: '#1A1D23',    // Azul escuro quase preto
  accent: '#F39C12',     // Laranja para o "próximo livro"
  secondary: '#6F7782',  // Cinza para textos secundários
  border: '#E8E4E1',
  chipActive: '#1A1D23',
  chipInactive: '#FFFFFF',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerSection: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    lineHeight: 38,
  },
  titleAccent: {
    color: Colors.accent,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.secondary,
    marginTop: 8,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  }
});

// import { StyleSheet } from 'react-native';

// export const Colors = {
//   background: '#F0F2F5',
//   surface: '#FFFFFF',
//   primary: '#1A1A1A',
//   secondary: '#64748B',
//   accent: '#007AFF',
//   border: '#E2E8F0',
// };

// export const globalStyles = StyleSheet.create({
//   // Layouts
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Lista
//   listContent: {
//     padding: 16,
//   },
//   // Componente Card
//   card: {
//     flexDirection: 'row',
//     backgroundColor: Colors.surface,
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: Colors.border,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: Colors.primary,
//   },
//   cardAuthor: {
//     fontSize: 14,
//     color: Colors.secondary,
//     marginTop: 4,
//   }
// });