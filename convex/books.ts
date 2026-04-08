import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("books").collect();
  },
});

export const getById = query({
  args: { id: v.id("books") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

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