const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		id: ID
		name: String
	}
	# ROOT TYPE
	type Query {
		books: [Book]
	}

	type Mutation {
		createBook(name: String): Book
	}

`

export default typeDefs;