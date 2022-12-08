const container = document.querySelector(".main");
const table = document.querySelector(".tbody");
const tbrow = document.createElement('tr')
const tbroh = document.createElement('th')
let addbutton = document.querySelector("btn-primary")

const form = document.querySelector('form');

function addToLibrary(e){
    e.preventDefault();
    alert('hello')

}
form.addEventListener('submit', addToLibrary)
















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


tbroh.classList.add("row")


table.append(tbrow);





console.log(myLibrary)