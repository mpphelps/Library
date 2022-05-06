let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(e) {
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);



    myLibrary.push(book)
    console.log(e);
    console.log(myLibrary);

    displayBooks();
}

function displayBooks() {
    
}

bookTitle = document.querySelector("#bookTitle");
bookAuthor = document.querySelector("#bookAuthor");
bookPages = document.querySelector("#bookPages");
bookStatus = document.querySelector("#statusRead");

submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", addBookToLibrary);