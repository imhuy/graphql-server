import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import resolvers from './src/schema/boook/resolvers';
import typeDefs from './src/schema/boook/typeDefs';
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://huy_dev:Huy123456%40@graphql-data.nxiuq.mongodb.net/blog?retryWrites=true&w=majority'
        );

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

async function startApolloServer() {
    // await connectDB();
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    await server.start();
    server.applyMiddleware({ app });

    app.get('/', (req, res) => {
        res.send('Hello');
    });

    app.listen({ port: 8000 }, () => {
        console.log(
            `Server is running at http://localhost:8000${server.graphqlPath}`
        );
    });
}

startApolloServer();
