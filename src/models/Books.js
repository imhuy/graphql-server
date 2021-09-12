import mongoose from 'mongoose';
const Schemna = mongoose.Schema;

const BookSchema = new Schemna({
    name: {
        type: String
    }
})

export default mongoose.model('books', BookSchema)