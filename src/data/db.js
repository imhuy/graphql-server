import Author from '../models/Author';
import Article from '../models/Article';

const mongoDataMethods = {
    getAllArticle: async () => await Article.find(),
};

export default mongoDataMethods;
