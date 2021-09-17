import mongoose from 'mongoose';
const Schemna = mongoose.Schema;

const authorSchema = new Schemna({
    name: { type: String },
    image: { type: String },
});

const Author = mongoose.model('author', authorSchema);
export default Author;
