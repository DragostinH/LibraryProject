let localLibrary = [];
let dynamicLibrary = [];
// let dynamicArrayOfBooks = Array.from(nodeListOfBooks);
const contentSection = document.querySelector('.content-section');

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

// Add button from the form
addBookButton.addEventListener('click', () => {
    let newBook = new Book(bookTitleField.value,
        bookAuthorField.value, bookPages.value, formCheckbox.checked);
    let cardDiv = createBookCard(newBook);
    let removeButton = cardDiv.querySelector('#remove-book-button');
    removeButton.addEventListener('click', ()=>{
        console.log(removeButton.textContent);
    });
    addBookToLibrary(localLibrary, cardDiv);
    hideForm(newBookForm);
    contentSection.appendChild(createBookCard(newBook));

})


// REMOVE BOOK button from the book card element
// let testBook2 = new Book('Book Name 2', 'Author Any2', 400, true);
// let testBook3 = new Book('Book Name 3', 'Author Any3', 300, false);
// let testBook4 = new Book('Book Name 4', 'Author Any4', 600, true);
// let testBook5 = new Book('Book Name 5', 'Author Any5', 100, false);


// localLibrary.push(testBook1);
// localLibrary.push(testBook2);
// localLibrary.push(testBook3);
// localLibrary.push(testBook4);
// localLibrary.push(testBook5);


// let formBook = createBookCard(new Book(bookTitleField.value
//     , bookAuthorField.value, bookPages.value, formCheckbox.checked))

// let formBook = createBookCard(testBook1)
// console.log(bookTitleField);
// console.log(formBook);
// localLibrary.push(testBook1);
// for (const book of localLibrary) {
//     contentSection.appendChild(createBookCard(book));
// }
// console.table(localLibrary);












// Function for adding book to library
function addBookToLibrary(library, book) {
    library.push(book);
}

// Function for removing item from list
function removeBookFromArray(library, index){
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

    let cardContainer = document.createElement('div');

    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');

    let bookFinished = document.createElement('input');
    bookFinished.type = "checkbox";
    bookFinished.classList.add = 'finished-checkbox';

    let editButton = document.createElement('button');
    editButton.id = 'edit-book-button';

    let removeButton = document.createElement('button');
    removeButton.id = 'remove-book-button';

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






