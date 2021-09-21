
const resolvers = {
    Query: {
        articles: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllArticle(),

        article: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getArticleById(id),

        authors: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllAuthor(),

        author: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(id),
    },

    Article: {
        author: async ({ authorId }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(authorId),
    },

    Author: {
        article: async ({ id }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getArticleByAuthor({ authorId: id }),
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),

        createArticle: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createArticle(args),
    },
};

export default resolvers;
