let localLibrary = [];
let contentSection = document.querySelector('.content-section');
let newBookForm = document.querySelector('.new-book-form');
const showFormButton = document.querySelector('.show-form-button');
const cancelFormButton = document.querySelector('.cancel-button');
let addBookButton = document.querySelector('.add-button');
const bookTitleField = document.querySelector('#book-name');
const bookAuthorField = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const formCheckbox = document.querySelector('#finished');



// Event listeners for buttons and form fields:
showFormButton.addEventListener('click', () => {
    console.log('CLICKED BUTTON');
    showForm(newBookForm, addBookButton);
})

cancelFormButton.addEventListener('click', () => {
    hideForm(newBookForm);
})

// Keyboard events
bookTitleField.addEventListener('keyup', () => {
    checkFieldContent(bookTitleField, bookAuthorField, bookPages, addBookButton);

})
bookAuthorField.addEventListener('keyup', () => {
    checkFieldContent(bookTitleField, bookAuthorField, bookPages, addBookButton);

})
bookPages.addEventListener('keyup', () => {
    checkFieldContent(bookTitleField, bookAuthorField, bookPages, addBookButton);

})

// Add book button from the form
addBookButton.addEventListener('click', () => {
    let newBook = new Book(bookTitleField.value,
        bookAuthorField.value, bookPages.value, formCheckbox.checked);
    let cardDiv = createBookCardDiv(newBook);
    // localLibrary.push(cardDiv);

    addBookToLibrary(localLibrary, cardDiv);
    // hideForm(newBookForm);
    for (const item of localLibrary) {
        contentSection.appendChild(item);

    }

})





// Function for checking if fields have data

function checkFieldContent(bookTitleField, bookAuthorField, bookPages, addButton) {
    console.log(bookTitleField.value);
    if (bookTitleField.value && bookAuthorField.value && bookPages.value) {
        enableButton(addButton);
    }
}

// Function for adding book to library
function addBookToLibrary(library, book) {
    library.push(book);
    hideForm(newBookForm);
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
function showForm(element, addButton) {
    disableButton(addButton);
    element.style.display = 'flex';
}

function disableButton(button) {
    button.disabled = true;
}

function enableButton(button) {
    button.disabled = false;
}

// Function for creating the book card container(div)
function createBookCardDiv(book) {
    let id = Math.floor(Math.random() * 2000000) + "";
    let cardContainer = document.createElement('div');
    cardContainer.id = id;
    cardContainer.classList.add('card-example');

    let bookTitle = createTitle(book);
    let bookAuthor = createAuthor(book);
    let bookPages = createBookPages(book);
    let bookChecked = createBookFinishedCheckbox(book);
    let editButton = createEditButton(cardContainer);
    let removeButton = createRemoveButton(cardContainer);

    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(bookChecked);
    cardContainer.appendChild(editButton);
    cardContainer.appendChild(removeButton);


    return cardContainer;
}

function createTitle(param) {
    let bookTitle = document.createElement('p');
    bookTitle.innerText = param.name;
    return bookTitle;

}

function createAuthor(param) {
    let bookAuthor = document.createElement('p');
    bookAuthor.innerText = param.author;
    return bookAuthor;

}

function createBookPages(param) {
    let bookPages = document.createElement('p');
    bookPages.innerText = param.pages;
    return bookPages;

}


function createBookFinishedCheckbox(param) {
    let bookFinished = document.createElement('input');
    bookFinished.type = "checkbox";
    bookFinished.classList.add = 'finished-checkbox';
    bookFinished.checked = param.finished;

    return bookFinished;

}

function createEditButton(param) {
    let editButton = document.createElement('button');
    editButton.id = 'edit-book-button';
    editButton.addEventListener('click', () => {
        console.log('Going to add this functionality later')
    });

    editButton.innerText = 'EDIT';

    return editButton;

}


function createRemoveButton(param) {
    let removeButton = document.createElement('button');
    removeButton.id = 'remove-book-button';
    removeButton.addEventListener('click', () => {
        for (let i = 0; i < localLibrary.length; i++) {
            let currDiv = localLibrary[i];
            if (currDiv.id === param.id) {
                console.log(`This is the index of the book that you want to delete ${i}`);
                localLibrary.splice(i, 1);
                contentSection.removeChild(currDiv);
            }

        }


    })

    removeButton.innerText = 'REMOVE BOOK';

    return removeButton;
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






