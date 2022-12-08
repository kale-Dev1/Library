let myLibrary =[];

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        console.log(title,author,pages)
    }

}

function addToLibray(book){
    myLibrary.push(book);
}

addToLibray.prototype = Object.create(Book.prototype);

const book1 = new Book('JJ','Rowling', 96);
book1.info();
addToLibray(book1)

const container = document.querySelector(".main");


console.log(myLibrary)