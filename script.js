let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayLibrary(){
    myLibrary.forEach(book => displayBook(book));
}

function displayBook(book){
    const bookContainer = document.createElement("div");
    bookContainer.className = 'book-container';
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    
    const bookAuthor = document.createElement("span");
    bookAuthor.textContent= book.author;
    
    const bookPages = document.createElement("span");
    bookPages.textContent = book.pages;
    
    const bookIsRead = document.createElement("span");
    bookIsRead.textContent = book.isRead;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(bookIsRead);

    const element = document.querySelector(".library");
    element.appendChild(bookContainer);
}
 
function updateBookStats(){
    const totalBooks = document.getElementById("total-books");
    const totalPages = document.getElementById("total-pages");
    const completedBooks = document.getElementById("completed-books");
    let completedCount = 200;
    let bookCount = myLibrary.length;
    let pageCount = 0;
    pageCount = myLibrary.forEach((book) => pageCount+= parseInt(book.pages));
    totalBooks.textContent = bookCount;
    totalPages.textContent = pageCount;
    completedBooks.textContent = completedCount;
}







//TESTING

let test1 = new Book("test1", "test1", 111, true);
let test2 = new Book("test2", "test2", 222, true);
let test3 = new Book("test3", "test3", 333, true);
let test4 = new Book("test1", "test1", 444, true);
let test5 = new Book("test2", "test2", 555, true);
let test6 = new Book("test3", "test3", 666, true);
let test7 = new Book("test1", "test1", 777, true);
let test8 = new Book("test2", "test2", 888, true);
let test9 = new Book("test3", "test3", 999, true);

addBookToLibrary(test1);
addBookToLibrary(test2);
addBookToLibrary(test3);
addBookToLibrary(test4);
addBookToLibrary(test5);
addBookToLibrary(test6);
addBookToLibrary(test7);
addBookToLibrary(test8);
addBookToLibrary(test9);

displayLibrary();
updateBookStats();