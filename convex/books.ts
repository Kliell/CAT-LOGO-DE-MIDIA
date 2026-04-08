import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Função para buscar todos os livros (usada na sua HomeScreen)
export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("books").collect();
  },
});

// Função para buscar um único livro pelo ID
export const getById = query({
  args: { id: v.id("books") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Opcional: Função para adicionar um livro manualmente via código
export const createBook = mutation({
  args: {
    title: v.string(),
    author: v.string(),
    description: v.string(),
    coverUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const bookId = await ctx.db.insert("books", {
      title: args.title,
      author: args.author,
      description: args.description,
      coverUrl: args.coverUrl,
    });
    return bookId;
  },
});