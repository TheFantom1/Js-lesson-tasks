//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'The Picture of Dorian Gray',
    pageCount: 370,
    genre: 'gothic novel',
    authors: [
        { name: 'Oscar Wilde', age: 45 }
    ]
};

let book2 = {
    title: 'Nazar Stodolia',
    pageCount: 11,
    genre: 'Stage play',
    authors: [
        { name: 'Taras Shevchenko', age: 29 }
    ]
};

let book3 = {
    title: 'Charlie and The Chocolate Factory',
    pageCount: 240,
    genre: 'Fantasy-Comedy',
    authors: [
        { name: 'Roald Dahl', age: 45 }
    ]
};

console.log(book1, book2, book3)
