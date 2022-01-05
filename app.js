let localLibrary = [];
let contentSection = document.querySelector('.content-section');
let newBookForm = document.querySelector('.new-book-form');
const showFormButton = document.querySelector('.show-form-button');
const cancelFormButton = document.querySelector('.cancel-button');
let addBookButton = document.querySelector('.add-button');
const bookTitleField = document.querySelector('#book-name');
const bookAuthorField = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
// const formCheckbox = document.querySelector('#finished');
const dropDown = document.querySelector('#read-status');




// Event listeners for buttons and form fields:
showFormButton.addEventListener('click', () => {
    showForm(newBookForm, addBookButton);
})

cancelFormButton.addEventListener('click', () => {
    hideForm(newBookForm);
})

// Keyboard events for form
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
        bookAuthorField.value, bookPages.value, dropDown.value);
    let cardDiv = createBookCardDiv(newBook);
    setInitialBackgroundColor(cardDiv);
    addBookToLibrary(localLibrary, cardDiv);
    for (const item of localLibrary) {
        contentSection.appendChild(item);

    }

})





// Function for checking if fields have data

function checkFieldContent(bookTitleField, bookAuthorField, bookPages, addButton) {
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

function changeBackgroundDependingOnStatus(status) {
    let divBackground = status.parentElement;

    switch (status.value) {

        case "complete":
        case "reading":
        case "on-hold":
        case "dropped":
            divBackground.className = '';
            divBackground.className = `${status.value}-book`;
            break;
    }
}

function setInitialBackgroundColor(param) {
    let currentSelection = param.children[7].value;
    switch (currentSelection) {
        case 'complete':
        case 'reading':
        case 'on-hold':
        case 'dropped':
            param.className = `${currentSelection}-book`;
            break;
    }
}

// Function for creating the book card container(div)
function createBookCardDiv(book) {
    let titleNotation = document.createElement('p');
    titleNotation.innerText = 'Title:';

    let authorNotation = document.createElement('p');
    authorNotation.innerText = 'Author:';

    let pagesNotation = document.createElement('p');
    pagesNotation.innerText = 'Pages:';

    let statusNotation = document.createElement('p');
    statusNotation.innerText = 'Status:'


    let id = Math.floor(Math.random() * 2000000) + "";
    let cardContainer = document.createElement('div');
    cardContainer.id = id;
    cardContainer.classList.add('card-example');



    let bookTitle = createTitle(book);
    let bookAuthor = createAuthor(book);
    let bookPages = createBookPages(book);
    let bookSelectDropdown = createSelectList(book);
    // let editButton = createEditButton(cardContainer);
    let removeButton = createRemoveButton(cardContainer);

    cardContainer.appendChild(titleNotation);
    cardContainer.appendChild(bookTitle);

    cardContainer.appendChild(authorNotation);
    cardContainer.appendChild(bookAuthor);

    cardContainer.appendChild(pagesNotation);
    cardContainer.appendChild(bookPages);

    cardContainer.appendChild(statusNotation);
    cardContainer.appendChild(bookSelectDropdown);
    // cardContainer.appendChild(editButton);
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

function createSelectList(param) {
    let select = document.createElement('SELECT');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let option4 = document.createElement('option');

    
    option1.value = 'complete';
    option1.text = 'Complete'
    
    option2.value = 'reading';
    option2.text = 'Reading';
    
    option3.value = 'on-hold';
    option3.text = 'On-hold';
    
    option4.value = 'dropped';
    option4.text = 'Dropped';

    
    select.add(option1, null)
    select.add(option2, null)
    select.add(option3, null)
    select.add(option4, null)

    select.addEventListener('change', (e) =>{
        changeBackgroundDependingOnStatus(select);
    })
    


    // Mirroring the dropdown selection from the form to after the card is created
    for (let i = 0; i < select.options.length; i++) {
        let currOption = select.options[i];
        if (currOption.value === param.status) {
            select.options[i].selected = true;
            return select;
        }

    }

    return select;
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
    constructor(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    info() {
        console.log(`this.name\n
    this.author\n
    this.pages\n
    this.finished\n`);
    }
}






