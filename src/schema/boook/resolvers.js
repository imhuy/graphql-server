import { articles, authors } from '../../data';
import Books from '../../models/Books';

const resolvers = {
    Query: {
        articles: () => articles,
        article: (parent, args) => articles.find((x) => x.id == args.id),

        authors: () => authors,
        author: (parent, args) => authors.find((x) => x.id == args.id),
    },

    Article: {
        author: (parent, args) => authors.find((x) => parent.authorId == x.id),
    },

    Author: {
        article: (parent, args) =>
            console.log(articles.filter((x) => parent.articleId == x.id)),
    },

    Mutation: {
        createBook: async (parent, args) => {
            const newBook = new Books(args);
            return await newBook.save();
        },
    },
};

export default resolvers;
