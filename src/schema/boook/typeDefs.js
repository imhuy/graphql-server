const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Image {
        defaultImg: String
    }

    type Author {
        id: ID!
        name: String
        avatar: String
        articleId: [String]
        article: [Article]
    }

    type Article {
        id: ID
        title: String
        category: String
        slug: String
        content: String
        image: Image
        description: String
        author: Author
        dateAdded: String
    }
    # ROOT TYPE
    type Query {
        articles: [Article]
        article(id: ID!): Article

        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        createBook(name: String): Article
    }
`;

export default typeDefs;
