let localLibrary = [];
let contentSection = document.querySelector('.content-section');
const newBookForm = document.querySelector('.new-book-form');
const showFormButton = document.querySelector('.show-form-button');
const cancelFormButton = document.querySelector('.cancel-button');
const addBookButton = document.querySelector('.add-button');
const bookTitleField = document.querySelector('#book-name');
const bookAuthorField = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const formCheckbox = document.querySelector('#finished');


// Event listeners for buttons:
showFormButton.addEventListener('click', () => {
    console.log('CLICKED BUTTON');
    showForm(newBookForm);
})

cancelFormButton.addEventListener('click', () => {
    hideForm(newBookForm);
})

// Add book button from the form
addBookButton.addEventListener('click', () => {
    let newBook = new Book(bookTitleField.value,
        bookAuthorField.value, bookPages.value, formCheckbox.checked);
    let cardDiv = createBookCard(newBook);
    // localLibrary.push(cardDiv);

    addBookToLibrary(localLibrary, cardDiv);
    hideForm(newBookForm);
    for (const item of localLibrary) {
        contentSection.appendChild(item);

    }

})


// Function for adding book to library
function addBookToLibrary(library, book) {
    library.push(book);
}

// Function for removing item from list
function removeBookFromArray(library, index) {
    library.splice(index, 1);
}
// Function to cancel form
function hideForm(element) {
    element.style.display = 'none';
}

// Function to show form
function showForm(element) {
    element.style.display = 'flex';
}

// Function for creating the book card element
function createBookCard(book) {
    let id = Math.floor(Math.random() * 2000000) + "";
    let cardContainer = document.createElement('div');
    cardContainer.id = id;

    // bookID.style.display = 'none';


    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');

    let bookFinished = document.createElement('input');
    bookFinished.type = "checkbox";
    bookFinished.classList.add = 'finished-checkbox';

    let editButton = document.createElement('button');
    editButton.id = 'edit-book-button';
    editButton.addEventListener('click', () => {
        console.log('Going to add this functionality later')
    });

    let removeButton = document.createElement('button');
    removeButton.id = 'remove-book-button';
    removeButton.addEventListener('click', () => {
       


        // localLibrary.splice(index, 1);
        console.log(cardContainer);
        console.log(localLibrary);


    })

    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(bookFinished);
    cardContainer.appendChild(editButton);
    cardContainer.appendChild(removeButton);

    cardContainer.classList.add('card-example');
    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookFinished.checked = book.finished;
    editButton.textContent = 'EDIT';
    removeButton.textContent = 'REMOVE BOOK';

    return cardContainer;
}

// Book constructor function
class Book {
    constructor(name, author, pages, finished) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.finished = finished;
    }
    info() {
        console.log(`this.name\n
    this.author\n
    this.pages\n
    this.finished\n`);
    }
}






