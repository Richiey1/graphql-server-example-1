import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//types
import { typeDefs } from './schema.js';

// db
import  db  from './_db.js'

const resolvers = {
    Query: {
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        books() {
            return db.books
        },
        book(_, args) {
            return db.books.find((book) => book.id === args.id)
        }
    },
    Author: {
        books(parent) {
            return db.books.filter((book) => book.author_id === parent.id)
        }
    },
    Book: {
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        },

    },
    Mutation: {
        addBook: (_, args) => {
            const newBook = {
                id: String(db.books.length + 1),
                title: args.title,
                author_id: args.author_id,
            };
            db.books.push(newBook);
            return newBook;
        },
        updateBook: (_, args) => {
            const book = db.books.find(book => book.id === args.id);
            if (!book) throw new Error('Book not found');
            book.title = args.title;
            return book;
        },
        deleteBook: (_, args) => {
            const index = db.books.findIndex(book => book.id === args.id);
            if (index === -1) throw new Error('Book not found');
            const deletedBook = db.books.splice(index, 1)[0];
            return deletedBook;
        }
    }
}

 // server setup
 const server = new ApolloServer({
    typeDefs,
    resolvers
    
 })

 const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
 })

 console.log("server ready at port", 4000)
