import mongoose from 'mongoose';
const Schemna = mongoose.Schema;

const articleSchema = new Schemna({
    title: { type: String },
    category: { type: Array },
    slug: { type: String },
    content: { type: String },
    description: { type: String },
    authorId: { type: String },
    dateAdded: { type: Date, default: Date.now },
});

const Article = mongoose.model('article', articleSchema);
export default Article;
