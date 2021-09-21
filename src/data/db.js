import Author from '../models/Author';
import Article from '../models/Article';

const mongoDataMethods = {
    getAllArticle: async () => await Article.find(),

    getArticleById: async (id) => await Article.findById(id),

    getAllAuthor: async () => await Author.find(),

    getAuthorById: async (id) => await Author.findById(id),

    getArticleByAuthor: (authorId) => Author.find(authorId),

    createAuthor: async (args) => {
        const newAuthor = new Author(args);
        return await newAuthor.save();
    },

    createArticle: async (args) => {
        const newArticle = new Article(args);
        return await newArticle.save();
    },
};

export default mongoDataMethods;
