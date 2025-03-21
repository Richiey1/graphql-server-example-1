export const typeDefs = `#graphql
   type Author {
        id: ID!
        name: String!
        verified: Boolean!
        books: [Book!]
    }
    type Book {
        id: ID!
        title: String!
        author: Author!
    }
    
    type Query {
        books: [Book!]!
        book(id: ID!): Book
        authors: [Author!]!
        author(id: ID!): Author
    }
    type Mutation {
        addBook(title: String!, author_id: ID!): Book!
        updateBook(id: ID!, title: String!): Book! 
        deleteBook(id: ID!): Book!
    }
    
`