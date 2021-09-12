import { books } from "../../data";
import Books from "../../models/Books";

const resolvers = {
    Query: {
        books: () => books
    },

    Mutation: {
        createBook: async (parent, args,) => {
            const newBook = new Books(args);
            return await newBook.save();
        }
    }
}

export default resolvers;