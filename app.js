let localLibrary = [];
const contentSection = document.querySelector('.content-section');

let testBook1 = new Book('Book Name 1', 'Author Any', 500, false);
let testBook2 = new Book('Book Name 2', 'Author Any2', 400, true);
let testBook3 = new Book('Book Name 3', 'Author Any3', 300, false);
let testBook4 = new Book('Book Name 4', 'Author Any4', 600, true);
let testBook5 = new Book('Book Name 5', 'Author Any5', 100, false);


localLibrary.push(testBook1);
localLibrary.push(testBook2);
localLibrary.push(testBook3);
localLibrary.push(testBook4);
localLibrary.push(testBook5);




/*
<div class="card-example">
<p>Book name</p>
<p>Book Author</p>
<p>Pages</p>
<p>Finished?</p>
<button>EDIT</button>
<button>REMOVE</button>
</div>
*/




for (const book of localLibrary) {
    contentSection.appendChild(createBookCard(book));
}

// Function for creating the book card element
function createBookCard(book){
    let cardContainer = document.createElement('div');
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let bookFinished = document.createElement('input');
    bookFinished.type = "checkbox";
    let editButton = document.createElement('button');
    let removeButton = document.createElement('button');

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
    editButton.textContent = 'EDIT';
    removeButton.textContent= 'REMOVE BOOK';

    return cardContainer;
}

// Book constructor function
function Book(name, author, pages, finished) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

    
}

Book.prototype.info = ()=>{
    console.log(`this.name\n
    this.author\n
    this.pages\n
    this.finished\n`)
}

Book.prototype.addBookToLibrary = (library, book) =>{
    library.push(this.book);
}




