let myLibrary = [];

libraryArea = document.querySelector(".library-area");
addBookButton = document.querySelector('#addBookButton');
bookForm = document.querySelector("#popup");
submitButton = document.querySelector("#submit-button");
cancelButton = document.querySelector("#cancel-button");

addBookButton.addEventListener("click", displayForm);
submitButton.addEventListener("click", addBookToLibrary);
cancelButton.addEventListener("click", clearForm);

let index = 0;

function Book(index, title, author, pages, read) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayForm(){
    bookForm.style.setProperty("display", "block");
}

function addBookToLibrary(e) {
    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    const bookStatus = document.querySelector("#statusRead");

    console.log(bookTitle.value);

    if (bookTitle.value === "") {
        alert("Title is required");
        return;
    }
    if (bookAuthor.value === "") {
        alert("Author is required");
        return;
    }
    if (bookPages.value <= 0) {
        alert("Pages must be more than 0");
        return;
    }

    bookPages.value = Number(bookPages.value);

    const book = new Book(index, bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
    index++;

    myLibrary.push(book)
    console.log(e);
    console.log(myLibrary);

    displayBooks();
    clearForm(e)
}

function clearForm(e) {
    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = 0;
    bookForm.style.setProperty("display", "none");
}

function toggleRead(e) {

    this.style.backgroundColor === 'rgb(224, 79, 99)' ?  this.style.backgroundColor = 'rgb(99, 218, 99)': this.style.backgroundColor = 'rgb(224, 79, 99)';
    this.textContent = (this.textContent === "Read"? "Not Read" : "Read");
    myLibrary.forEach(element => {
        if (element.index == this.parentNode.dataset.index) {
            element.read = element.read ?  false : true;
        }
    })

}

function removeBook(e) {
    this.parentNode.remove();
    myLibrary.splice(this.parentNode.dataset.index,1);
}

function displayBooks() {
    
    //removes all books and reprints
    while (libraryArea.firstChild) {
        libraryArea.removeChild(libraryArea.firstChild);
    }

    myLibrary.forEach(element => {
        
        const bookContainer = document.createElement('div');
        const bookTitleContent = document.createElement('div');
        const bookAuthorContent = document.createElement('div');
        const bookPagesContent = document.createElement('div');
        const bookStatusContent = document.createElement('div');
        const bookStatusButton = document.createElement('button');
        const bookRemoveButton = document.createElement('button');

        bookTitleContent.textContent = `Title: ${element.title}`;
        bookAuthorContent.textContent = `Author: ${element.author}`;
        bookPagesContent.textContent = `${element.pages} pages`;
        bookStatusButton.textContent = element.read ? 'Read' : 'Not Read';
        element.read ?  bookStatusButton.style.backgroundColor = 'rgb(99, 218, 99)': bookStatusButton.style.backgroundColor = 'rgb(224, 79, 99)';
        bookRemoveButton.style.backgroundColor = '#e9e9ed';
        console.log("element read: " + element.read);
        bookRemoveButton.textContent = "Remove";

        bookContainer.appendChild(bookTitleContent);
        bookContainer.appendChild(bookAuthorContent);
        bookContainer.appendChild(bookPagesContent);
        bookContainer.appendChild(bookStatusContent);
        bookContainer.appendChild(bookStatusButton);
        bookContainer.appendChild(bookRemoveButton);

        bookContainer.classList.add("book");
        bookTitleContent.classList.add("book-content");
        bookAuthorContent.classList.add("book-content");
        bookPagesContent.classList.add("book-content");
        bookStatusContent.classList.add("book-content");
        bookStatusButton.classList.add("book-content");
        bookRemoveButton.classList.add("book-content");
        
        bookStatusButton.addEventListener("click", toggleRead);
        bookRemoveButton.addEventListener("click", removeBook);

        bookContainer.dataset.index = element.index;

        libraryArea.appendChild(bookContainer);
    });

}


