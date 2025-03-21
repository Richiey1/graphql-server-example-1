let authors = [
    { id: '1', name: 'J.K. Rowling', verified: true },
    { id: '2', name: 'George R.R. Martin', verified: true },
    { id: '3', name: 'J.R.R. Tolkien', verified: true },
    { id: '4', name: 'Agatha Christie', verified: false },
    { id: '5', name: 'Stephen King', verified: true },
];

let books = [
    { id: '1', title: 'Harry Potter and the Sorcerer\'s Stone', author_id: '1' },
    { id: '2', title: 'A Game of Thrones', author_id: '2' },
    { id: '3', title: 'The Hobbit', author_id: '3' },
    { id: '4', title: 'Murder on the Orient Express', author_id: '4' },
    { id: '5', title: 'The Shining', author_id: '5' },
    { id: '6', title: 'Harry Potter and the Chamber of Secrets', author_id: '1' },
    { id: '7', title: 'The Lord of the Rings', author_id: '3' },
];

export default { authors, books };