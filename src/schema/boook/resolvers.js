import { articles, authors } from '../../data';
import Author from '../../models/Author';
import Article from '../../models/Article';

const resolvers = {
    Query: {
        articles: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllArticle(),
            
        article: (parent, args) => articles.find((x) => x.id == args.id),

        authors: () => authors,
        author: (parent, args) => authors.find((x) => x.id == args.id),
    },

    Article: {
        author: (parent, args) => authors.find((x) => parent.authorId == x.id),
    },

    Author: {
        article: (parent, args) => articles.filter((x) => parent.id == x.authorId),
    },

    Mutation: {
        createAuthor: async (parent, args) => {
            const newAuthor = new Author(args);
            return await newAuthor.save();
        },

        createArticle: async (parent, args) => {
            const newArticle = new Article(args);
            return await newArticle.save();
        },
    },
};

export default resolvers;
