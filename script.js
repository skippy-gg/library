let myLibrary = [];

function Book(title, author, pages, isRead, bookID) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages);
    this.isRead = isRead
    this.bookID = bookID;
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

    const removeBookBtn = document.createElement("button");
    removeBookBtn.className = "removeBtn";
    removeBookBtn.textContent = "Delete";

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(bookIsRead);
    bookContainer.appendChild(removeBookBtn);

    bookContainer.addEventListener("click", removeBook);

    bookContainer.id = book.bookID;

    const element = document.querySelector(".library");
    element.appendChild(bookContainer);
}
 
function updateBookStats(){
    const totalBooks = document.getElementById("total-books");
    const totalPages = document.getElementById("total-pages");
    const completedBooks = document.getElementById("completed-books");
    let bookCount = myLibrary.length;
    let pageCount = 0;
    let completedCount = 0;
    myLibrary.forEach(book => pageCount+= book.pages);
    myLibrary.forEach(book => book.isRead === "true"? completedCount+= 1: null);
    totalBooks.textContent = bookCount;
    totalPages.textContent = pageCount;
    completedBooks.textContent = completedCount;
}

function addBook(){
    const inputTitle = document.getElementById("booktitle").value
    const inputAuthor = document.getElementById("bookauthor").value
    const inputPages = document.getElementById("bookpages").value
    const inputIsRead = document.querySelector('input[name="bookread"]:checked').value;
    const bookID = Math.floor(Math.random()*10000000000);
    let newBook = new Book(inputTitle, inputAuthor, inputPages, inputIsRead, bookID);
    
    addBookToLibrary(newBook);
    displayBook(newBook);
    updateBookStats();
}

function removeBook(e){
    myLibrary = myLibrary.filter(book => (book.bookID !== parseInt(e.target.parentNode.id)));
    e.target.parentNode.remove();
    updateBookStats();
}

//EVENT LISTENERS
const addButton = document.querySelector(".addBtn");
addButton.addEventListener("click", addBook);

//TESTING

// let test1 = new Book("test1", "test1", 111, true);
// let test2 = new Book("test2", "test2", 222, true);
// let test3 = new Book("test3", "test3", 333, true);
// let test4 = new Book("test1", "test1", 444, true);
// let test5 = new Book("test2", "test2", 555, true);
// let test6 = new Book("test3", "test3", 666, true);
// let test7 = new Book("test1", "test1", 777, true);
// let test8 = new Book("test2", "test2", 888, true);
// let test9 = new Book("test3", "test3", 999, true);

// addBookToLibrary(test1);
// addBookToLibrary(test2);
// addBookToLibrary(test3);
// addBookToLibrary(test4);
// addBookToLibrary(test5);
// addBookToLibrary(test6);
// addBookToLibrary(test7);
// addBookToLibrary(test8);
// addBookToLibrary(test9);

// displayLibrary();
// updateBookStats();