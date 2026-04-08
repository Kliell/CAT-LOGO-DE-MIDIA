import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Tabela de livros
  books: defineTable({
    title: v.string(),       // Título do livro
    author: v.string(),      // Autor
    description: v.string(), // Sinopse/Descrição
    coverUrl: v.string(),    // URL da imagem da capa
  }),
});