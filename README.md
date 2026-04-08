# 📚 Bookshelf App

Uma plataforma moderna e reativa para descoberta e gerenciamento de leituras. O projeto utiliza tecnologias de ponta para oferecer uma experiência em tempo real, permitindo que usuários listem e cadastrem seus livros favoritos com uma interface inspirada em bibliotecas digitais premium.

-----

## 🚀 Tecnologias e Bibliotecas

O projeto foi construído utilizando o ecossistema mais moderno de desenvolvimento mobile:

  * **[React Native](https://reactnative.dev/)** com **[Expo](https://expo.dev/)**: Framework base para o desenvolvimento cross-platform.
  * **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e produtividade.
  * **[Convex](https://www.convex.dev/)**: Backend-as-a-Service (BaaS) para banco de dados NoSQL e funções de nuvem em tempo real via WebSockets.
  * **[Expo Router](https://docs.expo.dev/router/introduction/)**: Navegação baseada em arquivos (Stack e Tabs).
  * **StyleSheet**: Estilização nativa com arquitetura de design system centralizado.
  * **Lucide React Native / Icons**: Iconografia do projeto.

-----

## 📸 Demonstração

| Descubra novos livros | Cadastro em Tempo Real |
| :---: | :---: |
|  |  |

> *Nota: Substitua os links acima pelos prints reais contidos na pasta `assets/screenshots` do seu repositório.*

-----

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

  * Node.js instalado.
  * Conta criada no [Convex](https://www.convex.dev/).
  * Expo Go instalado no celular ou um emulador configurado.

### Passo 1: Clonar e Instalar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bookshelf-app.git

# Entre na pasta
cd bookshelf-app

# Instale as dependências
npm install
```

### Passo 2: Configurar o Backend (Convex)

O Convex gerenciará seu banco de dados automaticamente.

```bash
# Inicie o ambiente de desenvolvimento do Convex
# Isso abrirá o painel no navegador e criará seu arquivo .env.local
npx convex dev
```

### Passo 3: Variáveis de Ambiente

Verifique se o arquivo `.env.local` foi criado na raiz com a chave:

```env
EXPO_PUBLIC_CONVEX_URL=https://seu-projeto.convex.cloud
```

### Passo 4: Executar o App

Em um novo terminal (mantendo o `convex dev` rodando):

```bash
npx expo start
```

Pressione `a` para Android, `i` para iOS ou escaneie o QR Code com o app Expo Go.

-----

## 🛠️ Arquitetura de Pastas

```text
├── app/                 # Rotas e Layouts (Expo Router)
│   ├── (tabs)/          # Navegação por abas
│   └── _layout.tsx      # Provedores globais (Convex)
├── assets/              # Imagens e Estilos Globais
│   └── styles/          # styles.tsx (Design System)
├── components/          # Componentes reutilizáveis (Cards, Inputs)
├── convex/              # Backend (Schema e Funções de API)
└── .env.local           # Configurações de conexão (ignorado pelo git)
```

-----

## 📌 Issue Tracking

Para manter a organização do desenvolvimento, utilizamos as **GitHub Issues**. Você pode acompanhar o progresso das tarefas pendentes, bugs e novas funcionalidades na aba de Issues deste repositório.

**Tarefas Atuais:**

  * [ ] Implementar busca por título em tempo real.
  * [ ] Adicionar persistência de "Favoritos" via AsyncStorage.
  * [ ] Criar tela de detalhes do livro.
  * [ ] Upload de imagens de capa diretamente da galeria.

-----

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----

*Desenvolvido com ❤️ por Kevin Liell*